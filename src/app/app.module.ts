import { APP_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatosModule } from './views/contatos/contatos.module';
import { HttpClientModule, HttpHandlerFn, HttpInterceptorFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CompromissosModule } from './views/compromissos/compromissos.module';
import { CategoriasModule } from './views/categorias/categorias.module';
import { DespesasModule } from './views/despesas/despesas.module';
import { RegistroModule } from './views/registro/registro.module';
import { LoginModule } from './views/login/login.module';
import { AuthService } from './core/auth/services/auth.service';
import { LocalStorageService } from './core/auth/services/local-storage.service';
import { httpTokenInterceptor } from './core/auth/interceptors/http-token-interceptor';

function logarUsuarioSalvoFactory(authService: AuthService){
  return () => authService.logarUsuarioSalvo();
}

@NgModule({
  // Componentes e diretivas que o Módulo Distribui
  declarations: [AppComponent],

  // Importa metadados de outros módulos (incluindo bibliotecas)
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,

    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),

    CoreModule,
    DashboardModule,
    ContatosModule,
    CompromissosModule,
    CategoriasModule,
    DespesasModule,
    LoginModule,
    RegistroModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: logarUsuarioSalvoFactory,
    deps: [AuthService],
    multi: true
    },
    provideHttpClient(withInterceptors([httpTokenInterceptor]))
],
  bootstrap: [AppComponent],
})
export class AppModule {}