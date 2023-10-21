import { FormaPagamentoEnum } from "./FormaPagamentoEnum";

export class FormsDespesaViewModel{
  descricao: string;
  valor: number;
  data: Date;
  fromaPagamento: FormaPagamentoEnum;
  categorias: string | null;

  constructor(descricao: string, valor: number, data: Date, fromaPagamento: FormaPagamentoEnum, categorias: string){
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
    this.fromaPagamento = fromaPagamento;
    this.categorias = categorias;
  }
}