import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { InserirContatoComponent } from './views/contatos/inserir-contato/inserir-contato.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contatos/inserir',
    component: InserirContatoComponent,
  }
  {
    path: 'contatos/editar/:id',
    component: EditarContatoComponent,
  },
  {
    path: 'contatos/excluir/:id',
    component: ExcluirContatoComponent,
  },
  {
    path: 'contatos/listar',
    component: ListarContatosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }