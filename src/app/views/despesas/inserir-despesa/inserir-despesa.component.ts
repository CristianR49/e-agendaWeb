import
{ Component, OnInit }
from '@angular/core';
import
{
    FormBuilder,
  FormControl,
  FormGroup,
  Validators,
}
from '@angular/forms';
import
{ DespesasService }
from '../services/despesas.service';
import
{ CategoriasService }
from '../../categorias/services/categorias.service';
import
{ Router }
from '@angular/router';
import
{ FormsDespesaViewModel }
from '../models/forms-despesa.view-model';
import
{ ToastrService }
from 'ngx-toastr';
import
{ ListarCategoriaViewModel }
from '../../categorias/models/listar-categoria.view-model';

@Component({
selector: 'app-inserir-despesa',
  templateUrl: './inserir-despesa.component.html',
  styleUrls:['./inserir-despesa.component.css']
})
export class InserirDespesaComponent implements OnInit
{
    form!: FormGroup;
    despesaVM!: FormsDespesaViewModel;
    categorias: ListarCategoriaViewModel [] = [];

    constructor(
    private formBuilder: FormBuilder,
    private despesaService: DespesasService,
    private categoriasService: CategoriasService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

ngOnInit(): void
{
    this.form = this.formBuilder.group({
    descricao: new FormControl('', [Validators.required, Validators.minLength(3)]),
      valor: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      formaPagamento: new FormControl('', [Validators.required]),
      categoriaId: new FormControl(''),
    });

    this.categoriasService
      .selecionarTodos()
      .subscribe(
        (categoriasCadastrados) => (this.categorias = categoriasCadastrados)
      );
}

campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
}

gravar() {
    if (this.form.invalid)
    {
        this.toastrService.warning(
          'Verifique o preenchimento do formulário!',
          'Aviso'
        );

        this.form.markAllAsTouched();

        return;
    }

    this.despesaVM = this.form.value;

    this.despesaService.inserir(this.despesaVM).subscribe({
    next: (despesa: FormsDespesaViewModel) => this.processarSucesso(despesa),
      error: (err: Error) => this.processarFalha(err),
    });
}

processarSucesso(despesa: FormsDespesaViewModel) {
    this.toastrService.success(
      `A despesa "${despesa.descricao}" foi cadastrada com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/despesas/listar']);
}

processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
}
}



