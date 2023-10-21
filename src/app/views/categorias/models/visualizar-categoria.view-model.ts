import { ListarDespesaViewModel } from "../../despesas/models/listar-despesa.view-model";

export class VisualizarCategoriaViewModel{
  id: string;
  titulo: string;
  despesas: ListarDespesaViewModel;
  constructor(id: string, titulo: string, despesas: ListarDespesaViewModel)
  {
    this.id = id;
    this.titulo = titulo;
    this.despesas = despesas;
  }
}