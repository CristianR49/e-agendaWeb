import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormsCompromissoViewModel } from '../models/forms-compromisso.view-model';
import { ListarCompromissoViewModel } from '../models/listar-compromisso.view-model';
import { VisualizarCompromissoViewModel } from '../models/visualizar-compromisso.view-model';
import { LocalStorageService } from 'src/app/core/auth/services/local-storage.service';

@Injectable()
export class CompromissosService {
  private endpoint: string =
    'https://e-agenda-web-api.onrender.com/api/compromissos/';

  constructor(private http: HttpClient, private localStorage : LocalStorageService) {}

  public inserir(
    compromisso: FormsCompromissoViewModel
  ): Observable<FormsCompromissoViewModel> {
    return this.http.post<any>(
      this.endpoint,
      compromisso,
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

  public editar(id: string, compromisso: FormsCompromissoViewModel) {
    return this.http
      .put<any>(this.endpoint + id, compromisso, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public excluir(id: string): Observable<any> {
    return this.http.delete(this.endpoint + id, this.obterHeadersAutorizacao()).pipe(catchError((err: HttpErrorResponse) => this.processarErroHttp(err)));
  }

  public selecionarTodos(): Observable<ListarCompromissoViewModel[]> {
    return this.http
      .get<any>(this.endpoint, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public selecionarPorId(id: string): Observable<FormsCompromissoViewModel> {
    return this.http
      .get<any>(this.endpoint + 'visualizacao-completa/' + id, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public selecionarCompromissoCompletoPorId(
    id: string
  ): Observable<VisualizarCompromissoViewModel> {
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