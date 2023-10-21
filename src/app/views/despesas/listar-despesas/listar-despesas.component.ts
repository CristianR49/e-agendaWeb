import { Component, OnInit } from '@angular/core';
import { DespesasService } from '../services/despesas.service';
import { ListarDespesaViewModel } from '../models/listar-despesa.view-model';

@Component({
  selector: 'app-listar-despesas',
  templateUrl: './listar-despesas.component.html',
  styleUrls: ['./listar-despesas.component.css']
})
export class ListarDespesasComponent implements OnInit {
  despesas: ListarDespesaViewModel[] = [];

  constructor(private despesasService: DespesasService) {}

  ngOnInit(): void {
    this.despesasService.selecionarTodos().subscribe((res) => {
      this.despesas = res;
    });
  }
}
