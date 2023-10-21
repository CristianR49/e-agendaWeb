import { StatusItemTarefaEnum } from "./StatusItemTarefaEnum";

export class FormsItemTarefaViewModel{
  id?: string;
  titulo: string;
  status: StatusItemTarefaEnum;
  concluido: boolean

  constructor(id: string, titulo: string, status: StatusItemTarefaEnum, concluido: boolean) {
    this.id = id;
    this.titulo = titulo,
    this.status = status,
    this.concluido = concluido
  }
}

