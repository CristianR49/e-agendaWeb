import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasService } from './services/categorias.service';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { RouterModule } from '@angular/router';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';
import { CardCategoriaComponent } from './card-categoria/card-categoria.component';



@NgModule({
  declarations: [
    InserirCategoriaComponent,
    ListarCategoriasComponent,
    EditarCategoriaComponent,
    ExcluirCategoriaComponent,
    CardCategoriaComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  providers: [CategoriasService]
})
export class CategoriasModule { }
