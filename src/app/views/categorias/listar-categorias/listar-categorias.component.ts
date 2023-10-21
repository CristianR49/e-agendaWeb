import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { ListarCategoriaViewModel } from '../models/listar-categoria.view-model';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {
  categorias: ListarCategoriaViewModel[] = [];

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.categoriasService.selecionarTodos().subscribe((res) => {
      this.categorias = res;
    });
  }

}
