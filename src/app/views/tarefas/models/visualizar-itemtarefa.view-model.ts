import { StatusTarefaEnum } from "./StatusTarefaEnum";

export class VisualizarItemTarefaViewModel {
  titulo: string;
  situacao: StatusTarefaEnum

  constructor(titulo: string, situacao: StatusTarefaEnum) {
    this.titulo = titulo,
    this.situacao = situacao;

  }
}