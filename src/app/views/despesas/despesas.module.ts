import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirDespesaComponent } from './inserir-despesa/inserir-despesa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DespesasService } from './services/despesas.service';
import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { RouterModule } from '@angular/router';
import { EditarDespesaComponent } from './editar-despesa/editar-despesa.component';
import { ExcluirDespesaComponent } from './excluir-despesa/excluir-despesa.component';
import { CardDespesaComponent } from './card-despesa/card-despesa.component';



@NgModule({
  declarations: [
    InserirDespesaComponent,
    ListarDespesasComponent,
    EditarDespesaComponent,
    ExcluirDespesaComponent,
    CardDespesaComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  providers: [DespesasService]
})
export class DespesasModule { }