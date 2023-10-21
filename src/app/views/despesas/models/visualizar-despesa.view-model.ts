import { FormaPagamentoEnum } from "./FormaPagamentoEnum";

export class VisualizarDespesaViewModel{
  id: string;
  descricao: string | null;
  valor: number;
  data: Date;
  fromaPagamento: FormaPagamentoEnum | null;
  categorias: string  | null;

  constructor(id: string, descricao: string, valor: number, data: Date, fromaPagamento: FormaPagamentoEnum, categorias: string){
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
    this.fromaPagamento = fromaPagamento;
    this.categorias = categorias;
  }
}