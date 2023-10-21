import { NgModule, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { InserirContatoComponent } from './views/contatos/inserir-contato/inserir-contato.component';
import { ListarContatosComponent } from './views/contatos/listar-contatos/listar-contatos.component';
import { EditarContatoComponent } from './views/contatos/editar-contato/editar-contato.component';
import { ExcluirContatoComponent } from './views/contatos/excluir-contato/excluir-contato.component';
import { ListarCompromissosComponent } from './views/compromissos/listar-compromissos/listar-compromissos.component';
import { InserirCompromissoComponent } from './views/compromissos/inserir-compromisso/inserir-compromisso.component';
import { EditarCompromissoComponent } from './views/compromissos/editar-compromisso/editar-compromisso.component';
import { ExcluirCompromissoComponent } from './views/compromissos/excluir-compromisso/excluir-compromisso.component';
import { ListarCategoriasComponent } from './views/categorias/listar-categorias/listar-categorias.component';
import { EditarCategoriaComponent } from './views/categorias/editar-categoria/editar-categoria.component';
import { InserirCategoriaComponent } from './views/categorias/inserir-categoria/inserir-categoria.component';
import { ListarDespesasComponent } from './views/despesas/listar-despesas/listar-despesas.component';
import { InserirDespesaComponent } from './views/despesas/inserir-despesa/inserir-despesa.component';
import { EditarDespesaComponent } from './views/despesas/editar-despesa/editar-despesa.component';
import { ExcluirDespesaComponent } from './views/despesas/excluir-despesa/excluir-despesa.component';
import { ExcluirCategoriaComponent } from './views/categorias/excluir-categoria/excluir-categoria.component';
import { FormsContatoViewModel } from './views/contatos/models/forms-contato.view-model';
import { ContatosService } from './views/contatos/services/contatos.service';
import { VisualizarContatoViewModel } from './views/contatos/models/visualizar-contato.view-model';
import { ListarContatoViewModel } from './views/contatos/models/listar-contato.view-model';

const listarContatosResolver: ResolveFn<ListarContatoViewModel[]> = () => {
  return inject(ContatosService).selecionarTodos()
};

const formsContatoResolver: ResolveFn<FormsContatoViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(ContatosService).selecionarPorId(route.paramMap.get('id')!)
};

const visualizarContatoResolver: ResolveFn<VisualizarContatoViewModel> = (
  route: ActivatedRouteSnapshot
  ) => {
  return inject(ContatosService).selecionarContatoCompletoPorId(route.paramMap.get('id')!)
}



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'contatos/inserir',
    component: InserirContatoComponent,
  },
  {
    path: 'contatos/editar/:id',
    component: EditarContatoComponent,
    resolve: { contato: formsContatoResolver }
  },
  {
    path: 'contatos/excluir/:id',
    component: ExcluirContatoComponent,
    resolve: { contato: visualizarContatoResolver }
  },
  {
    path: 'contatos/listar',
    component: ListarContatosComponent,
    resolve: {contatos: listarContatosResolver}
  },

  {
    path: 'compromissos/listar',
    component: ListarCompromissosComponent,
  },
  {
    path: 'compromissos/inserir',
    component: InserirCompromissoComponent,
  },
  {
    path: 'compromissos/editar/:id',
    component: EditarCompromissoComponent,
  },
  {
    path: 'compromissos/excluir/:id',
    component: ExcluirCompromissoComponent,
  },
  
  {
    path: 'categorias/listar',
    component: ListarCategoriasComponent,
  },
  {
    path: 'categorias/inserir',
    component: InserirCategoriaComponent,
  },
  {
    path: 'categorias/editar/:id',
    component: EditarCategoriaComponent,
  },
  {
    path: 'categorias/excluir/:id',
    component: ExcluirCategoriaComponent,
  },

  {
    path: 'despesas/listar',
    component: ListarDespesasComponent,
  },
  {
    path: 'despesas/inserir',
    component: InserirDespesaComponent,
  },
  {
    path: 'despesas/editar/:id',
    component: EditarDespesaComponent,
  },
  {
    path: 'despesas/excluir/:id',
    component: ExcluirDespesaComponent,
  },

  {
    path: 'tarefas',
    loadChildren: () =>
    import('./views/tarefas/tarefas.module').then((m) => m.TarefasModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}