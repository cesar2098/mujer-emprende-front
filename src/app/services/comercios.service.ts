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

  getComercio(): Observable<Comercio[]> {
    const response = this.httpClient.get<Comercio[]>(`${this.baseUrl}`);
    return response;
  }
}
