import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormsCategoriaViewModel } from '../models/forms-categoria.view-model';
import { ListarCategoriaViewModel } from '../models/listar-categoria.view-model';
import { VisualizarCategoriaViewModel } from '../models/visualizar-categoria.view-model';
import { LocalStorageService } from 'src/app/core/auth/services/local-storage.service';

@Injectable()
export class CategoriasService {
  private endpoint: string =
    'https://e-agenda-web-api.onrender.com/api/categorias/';

  constructor(private http: HttpClient, private localStorage : LocalStorageService) {}

  public inserir(
    categoria: FormsCategoriaViewModel
  ): Observable<FormsCategoriaViewModel> {
    return this.http.post<any>(
      this.endpoint,
      categoria,
      this.obterHeadersAutorizacao()
    )
    .pipe(
      map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
    )
  }

  private processarErroHttp(err: HttpErrorResponse) {
    let mensagemErro = '';

       if (err.status == 0)
       mensagemErro = 'Ocorreu um erro ao processar a requisição';
       
       if (err.status == 401)
       mensagemErro = 'O usuário não está autorizado. Efetue login e tente novamente.';

       else
        mensagemErro = err.error?.erros[0]

        return throwError(() => new Error(mensagemErro))
  }

  public editar(id: string, categoria: FormsCategoriaViewModel) {
    return this.http
      .put<any>(this.endpoint + id, categoria, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public excluir(id: string): Observable<any> {
    return this.http.delete(this.endpoint + id, this.obterHeadersAutorizacao()).pipe(catchError((err: HttpErrorResponse) => this.processarErroHttp(err)));
  }

  public selecionarTodos(): Observable<ListarCategoriaViewModel[]> {
    return this.http
      .get<any>(this.endpoint, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public selecionarPorId(id: string): Observable<FormsCategoriaViewModel> {
    return this.http
      .get<any>(this.endpoint + 'visualizacao-completa/' + id, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public selecionarCategoriaCompletoPorId(
    id: string
  ): Observable<VisualizarCategoriaViewModel> {
    return this.http
      .get<any>(
        this.endpoint + 'visualizacao-completa/' + id,
        this.obterHeadersAutorizacao()
      )
      .pipe(map((res) => res.dados));
  }

  private obterHeadersAutorizacao() {
    const token = this.localStorage.obterDadosLocaisSalvos()?.chave;
    

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  }
}