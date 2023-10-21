import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutenticarUsuarioViewModel } from 'src/app/core/auth/models/autenticar-usuario.view-model';
import { TokenViewModel } from 'src/app/core/auth/models/token.view-model';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  campoEstaInvalido(nome: string) {
    return this.form?.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

  login() {
    if (this.form?.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }

      return;
    }

    this.authService.login(this.form?.value).subscribe({
      next: (loginRealizado) => this.processarSucesso(loginRealizado),
      error: (erro) => this.processarErro(erro),
    });
  }

  private processarSucesso(loginRealizado: TokenViewModel) {
    this.toastrService.info(
      `Seja bem-vindo, ${loginRealizado.usuarioToken.nome}!`
    );
    this.router.navigate(['/dashboard']);
  }

  private processarErro(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }
}