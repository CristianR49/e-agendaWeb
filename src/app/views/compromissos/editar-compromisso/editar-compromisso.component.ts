import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CompromissosService } from '../services/compromissos.service';
import { ContatosService } from '../../contatos/services/contatos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsCompromissoViewModel } from '../models/forms-compromisso.view-model';
import { ToastrService } from 'ngx-toastr';
import { ListarContatoViewModel } from '../../contatos/models/listar-contato.view-model';

@Component({
  selector: 'app-editar-compromisso',
  templateUrl: './editar-compromisso.component.html',
  styleUrls: ['./editar-compromisso.component.css']
})
export class EditarCompromissoComponent implements OnInit {
  form!: FormGroup;
  compromissoVM!: FormsCompromissoViewModel;
  contatos: ListarContatoViewModel[] = [];
  idSelecionado: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private compromissoService: CompromissosService,
    private contatosService: ContatosService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assunto: new FormControl('', [Validators.required, Validators.minLength(3)]),
      local: new FormControl('', [Validators.required]),
      tipoLocal: new FormControl(0, [Validators.required]),
      link: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      horaInicio: new FormControl('', [Validators.required]),
      horaTermino: new FormControl('', [Validators.required]),
      contatoId: new FormControl(''),
    });

    this.contatosService
      .selecionarTodos()
      .subscribe(
        (contatosCadastrados) => (this.contatos = contatosCadastrados)
      );

    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    this.compromissoService.selecionarPorId(this.idSelecionado).subscribe((res) => {
      this.form.patchValue(res);
    });
  }

  campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

  gravar() {
    if (this.form.invalid) {
      this.toastrService.warning(
        'Verifique o preenchimento do formulário!',
        'Aviso'
      );

      this.form.markAllAsTouched();

      return;
    }

    this.compromissoVM = this.form.value;

    this.compromissoService.editar(this.idSelecionado!, this.compromissoVM).subscribe({
      next: (compromisso: FormsCompromissoViewModel) => this.processarSucesso(compromisso),
      error: (err: Error) => this.processarFalha(err),
    });
  }

  processarSucesso(compromisso: FormsCompromissoViewModel) {
    this.toastrService.success(
      `O compromisso "${compromisso.assunto}" foi editado com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/compromissos/listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }

}
