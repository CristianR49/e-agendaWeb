import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { bottom } from '@popperjs/core';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatosModule } from './views/contatos/contatos.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // Componentes e Diretivas que o Módulo Distribui
  declarations: [
    AppComponent
  ],

  //importa metadados de outros módulos (incluindo bibliotecas)
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    HttpClientModule,
    CoreModule,
    DashboardModule,
    ContatosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
