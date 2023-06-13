import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comercio } from '../models/comercios';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {
  baseUrl = 'http://localhost:8080/comercio/comercio';
  private comercio: Comercio[] = [];
  constructor(private httpClient: HttpClient) { }


  getComercio(): Observable<any> {
    const response = this.httpClient.get(`${this.baseUrl + "/search"}`);
    response.pipe().subscribe(
      (response: any) => {
        this.comercio = response.respuesta;
      }
    );
    return response;
  }

  saveComercio(comercio: Comercio): Observable<any> {
    const response = this.httpClient.post(`${this.baseUrl}/save`, comercio);
    response.pipe().subscribe(
      (response: any) => {
        this.comercio = response.respuesta;
      }
    );
    return response;
  }
}
