export class ListarCompromissoViewModel {
  id: string;
  assunto: string;
  horaInicio:	string;
  horaTermino:	string;
  data: Date;
  nomeContato: string;

  constructor(id: string, assunto: string, horaInicio: string, horaTermino:	string, nomeContato: string, data: Date) {
    this.id = id;
    this.assunto = assunto;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.data = data;
    this.nomeContato = nomeContato;
  }

}