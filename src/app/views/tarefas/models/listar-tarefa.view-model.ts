import { FormsItemTarefaViewModel } from "./forms-itemtarefa.view-model";
import { PrioridadeTarefaEnum } from "./PrioridadeTarefaEnum";
import { StatusTarefaEnum } from "./StatusTarefaEnum";

export class ListarTarefaViewModel {
  id: string;
  titulo: string;
  dataCriacao: Date;
  prioridade: PrioridadeTarefaEnum;
  situacao: StatusTarefaEnum
  itens: FormsItemTarefaViewModel;

  constructor(id: string, titulo: string, dataCriacao: Date, prioridade: PrioridadeTarefaEnum, situacao: StatusTarefaEnum, itens: FormsItemTarefaViewModel) {
    this.id = id;
    this.titulo = titulo,
    this.dataCriacao = dataCriacao
    this.prioridade = prioridade,
    this.situacao = situacao;
    this.itens = itens
  }
}

