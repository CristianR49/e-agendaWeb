import { VisualizarContatoViewModel } from "../../contatos/models/visualizar-contato.view-model";
import { TipoLocalizacaoCompromissoEnum } from "./TipoLocalizacaoCompromissoEnum";

export class FormsCompromissoViewModel {
  assunto: string;
  local: string;
  tipoLocal: TipoLocalizacaoCompromissoEnum;
  link: string;
  data: Date;
  horaInicio: Date;
  horaTermino: Date;
  contatoId: string;

  constructor(assunto: string, local: string, tipoLocal: TipoLocalizacaoCompromissoEnum, link: string, data: Date, horaInicio: Date, horaTermino: Date, contatoId: string) {
    this.assunto = assunto;
    this.local = local;
    this.tipoLocal = tipoLocal;
    this.link = link;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.contatoId = contatoId;
  }
}

