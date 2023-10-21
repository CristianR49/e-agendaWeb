import { ListarContatoViewModel } from "src/app/views/contatos/models/listar-contato.view-model";
import { TipoLocalizacaoCompromissoEnum } from "./TipoLocalizacaoCompromissoEnum";

export class VisualizarCompromissoViewModel {
  id: string;
  assunto: string;
  local: string;
  tipoLocal: TipoLocalizacaoCompromissoEnum;
  link: string;
  data: Date;
  horaInicio: Date;
  horaTermino: Date;
  contato: ListarContatoViewModel;

  constructor(id: string, assunto: string, local: string, tipoLocal: TipoLocalizacaoCompromissoEnum, link: string, contato: ListarContatoViewModel, data: Date, horaInicio: Date, horaTermino: Date) {
    this.id = id;
    this.assunto = assunto;
    this.local = local;
    this.tipoLocal = tipoLocal;
    this.link = link;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.contato = contato;
  }
}