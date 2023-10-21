import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsCategoriaViewModel } from '../models/forms-categoria.view-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  form!: FormGroup;
  categoriaVM!: FormsCategoriaViewModel;
  idSelecionado: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriasService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    this.categoriaService.selecionarPorId(this.idSelecionado).subscribe((res) => {
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

    this.categoriaVM = this.form.value;

    this.categoriaService.editar(this.idSelecionado!, this.categoriaVM).subscribe({
      next: (categoria: FormsCategoriaViewModel) => this.processarSucesso(categoria),
      error: (err: Error) => this.processarFalha(err),
    });
  }

  processarSucesso(categoria: FormsCategoriaViewModel) {
    this.toastrService.success(
      `A categoria "${categoria.titulo}" foi editada com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/categorias/listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }

}
