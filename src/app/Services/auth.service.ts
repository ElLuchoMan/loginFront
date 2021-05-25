import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtModel } from '../Models/jwt-model.interface';
import { LoginUsuario } from '../Models/login-usuario.interface';

@Injectable({
  providedIn: 'root'
})
const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
export class AuthService {

  private authURL = 'http://localhost:8080/api/auth/;;

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL + 'login', usuario, headers);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', usuario, headers);
  }
}
