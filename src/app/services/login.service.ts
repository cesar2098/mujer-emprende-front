import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosContra } from '../models/usuariocontra.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:8080/comercio/auth';
  token:string="";
  private usuarioscontra: UsuariosContra[] = [];

  constructor(
    private router:Router,
    private httpClient: HttpClient) { }
  
  login(){
    const response = this.httpClient.get<UsuariosContra[]>(`${this.baseUrl}`);
    response.pipe().subscribe(
      (response: any) => {
        this.usuarioscontra = response.respuesta;
      }
    );    
    return response;
  }
}
