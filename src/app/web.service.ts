import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagens } from './Mensagens';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseUrl = ' https://tiagoifsp.ddns.net/mensagens/jwt/';

  cadastrarUsuario(usuario: { nome: string; login: string; senha: string }): Observable<any> {
    let body = new HttpParams();
    body = body.set("nome", usuario.nome);
    body = body.set("login", usuario.login);
    body = body.set("senha", usuario.senha);
    return this.http.put(this.baseUrl + '/user.php', body, { observe: 'response' });
  }

  realizarLogin(dadosLogin: { login: string; senha: string }): Observable<any> {
    let body = new HttpParams();
    body = body.set("login", dadosLogin.login);
    body = body.set("senha", dadosLogin.senha);
    return this.http.post(this.baseUrl + '/user.php', body, { observe: 'response' });
  }

  cadastrarNovaMensagem(dadosEnvio: { texto: string }): Observable<any> {
    let body = new HttpParams();
    body = body.set("texto", dadosEnvio.texto);
    return this.http.put(this.baseUrl + 'msg.php', body, { observe: 'response' });
  }

  todasMensagens(): Observable<Mensagens[]> {
    return this.http.get<Mensagens[]>(this.baseUrl + 'msg.php');
  }

  constructor(private http: HttpClient) { }
}
