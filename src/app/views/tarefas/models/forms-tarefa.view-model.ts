import { PrioridadeTarefaEnum } from "./PrioridadeTarefaEnum";
import { FormsItemTarefaViewModel } from "./forms-itemtarefa.view-model";

export class FormsTarefaViewModel{
  titulo: string;
  prioridade: PrioridadeTarefaEnum;
  itens: FormsItemTarefaViewModel;

  constructor(titulo: string, prioridade: PrioridadeTarefaEnum, itens: FormsItemTarefaViewModel){
  this.titulo = titulo,
  this.prioridade = prioridade,
  this.itens = itens
  }
}

