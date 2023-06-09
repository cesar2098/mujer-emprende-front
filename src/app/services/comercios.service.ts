import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comercio } from '../models/comercios';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {
  baseUrl = 'http://localhost:8080/comercio/comercio/search';
  private comercio: Comercio[] = [];
  constructor(private httpClient: HttpClient) { }


  getComercio(): Observable<any> {
    const response = this.httpClient.get(`${this.baseUrl}`);
    response.pipe().subscribe(
      (response: any) => {
        this.comercio = response.respuesta;
      }
    );

    return response;
  }
}
