import { Component } from '@angular/core';
import { VisualizarCompromissoViewModel } from '../models/visualizar-compromisso.view-model';
import { CompromissosService } from '../services/compromissos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoLocalizacaoCompromissoEnum } from "../models/TipoLocalizacaoCompromissoEnum";
import { ListarContatoViewModel } from '../../contatos/models/listar-contato.view-model';

@Component({
  selector: 'app-excluir-compromisso',
  templateUrl: './excluir-compromisso.component.html',
  styleUrls: ['./excluir-compromisso.component.css']
})
export class ExcluirCompromissoComponent {
  CompromissoVM!: VisualizarCompromissoViewModel;
  idSelecionado: string | null = null;

  constructor(private CompromissoService: CompromissosService, private route: ActivatedRoute, private router: Router) {
    this.CompromissoVM = new VisualizarCompromissoViewModel('', '', '', TipoLocalizacaoCompromissoEnum.Online, '', new ListarContatoViewModel('', '', ''), new Date(''), new Date(''), new Date(''));
  }

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    this.CompromissoService.selecionarCompromissoCompletoPorId(this.idSelecionado)
    .subscribe((res) => {
      this.CompromissoVM = res;
    })
  }

  gravar() {
    this.CompromissoService.excluir(this.idSelecionado!)
    .subscribe((res) => {this.router.navigate(['/compromissos', 'listar'])})
  }
}
