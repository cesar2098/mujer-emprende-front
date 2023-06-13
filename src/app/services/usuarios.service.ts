import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UsuariosService {
    baseUrl = 'http://localhost:8080/comercio/usuarios';
    private usuario: Usuario[] = [];
    constructor(private httpClient: HttpClient) { }
  
  
    getUsuario(id: number): Observable<any> {
      const response = this.httpClient.get(`${this.baseUrl + "/search"}${id}`);
      response.pipe().subscribe(
        (response: any) => {
          this.usuario = response.respuesta;
        }
      );
      return response;
    }
  
    saveUsuario(usuario: Usuario): Observable<any> {
      const response = this.httpClient.post(`${this.baseUrl + "/save"}`, usuario);
      response.pipe().subscribe(
        (response: any) => {
          this.usuario = response.respuesta;
        }
      );
      return response;
    }
  }