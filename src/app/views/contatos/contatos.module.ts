import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirContatoComponent } from './inserir-contato/inserir-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatosService } from './services/contatos.service';



@NgModule({
  declarations: [
    InserirContatoComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  providers: [ContatosService]
})
export class ContatosModule { }
