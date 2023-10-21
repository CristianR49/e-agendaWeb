import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirCompromissoComponent } from './inserir-compromisso/inserir-compromisso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompromissosService } from './services/compromissos.service';
import { ListarCompromissosComponent } from './listar-compromissos/listar-compromissos.component';
import { RouterModule } from '@angular/router';
import { EditarCompromissoComponent } from './editar-compromisso/editar-compromisso.component';
import { ExcluirCompromissoComponent } from './excluir-compromisso/excluir-compromisso.component';
import { CardCompromissoComponent } from './card-compromisso/card-compromisso.component';



@NgModule({
  declarations: [
    InserirCompromissoComponent,
    ListarCompromissosComponent,
    EditarCompromissoComponent,
    ExcluirCompromissoComponent,
    CardCompromissoComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  providers: [CompromissosService]
})
export class CompromissosModule { }
