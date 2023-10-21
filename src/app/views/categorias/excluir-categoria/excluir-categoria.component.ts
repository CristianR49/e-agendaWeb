import { Component, OnInit } from '@angular/core';
import { VisualizarCategoriaViewModel } from '../models/visualizar-categoria.view-model';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarDespesaViewModel } from '../../despesas/models/listar-despesa.view-model';
import { FormaPagamentoEnum } from "../../despesas/models/FormaPagamentoEnum";

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent implements OnInit {
  categoriaVM!: VisualizarCategoriaViewModel;
  idSelecionado: string | null = null;

  constructor(private categoriaService: CategoriasService, private route: ActivatedRoute, private router: Router) {
    this.categoriaVM = new VisualizarCategoriaViewModel('', '', new ListarDespesaViewModel('', '', 0, new Date(''), FormaPagamentoEnum.Cartao, ''));
  }

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    this.categoriaService.selecionarCategoriaCompletoPorId(this.idSelecionado)
    .subscribe((res) => {
      this.categoriaVM = res;
    })
  }

  gravar() {
    this.categoriaService.excluir(this.idSelecionado!)
    .subscribe((res) => {this.router.navigate(['/categorias', 'listar'])})
  }
}
