import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenViewModel } from 'src/app/core/auth/models/token.view-model';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  form?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  campoEstaInvalido(nome: string) {
    return this.form?.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

  registrar() {
    if (this.form?.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
        console.error(erro);
      }

      return;
    }

    this.authService.registrar(this.form?.value).subscribe({
      next: (registroRealizado) => this.processarSucesso(registroRealizado),
      error: (erro) => this.processarErro(erro),
    });
  }

  private processarSucesso(loginRealizado: TokenViewModel) {
    this.toastrService.success(
      `Seja bem-vindo, ${loginRealizado.usuarioToken.nome}.`,
      'Registro realizado com sucesso!'
    );

    this.router.navigate(['/dashboard']);
  }

  private processarErro(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }
}