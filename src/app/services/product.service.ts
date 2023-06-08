import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://api.escuelajs.co/api/v1/';

  private products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProduct(idCom:number): Observable<Product[]> {
    console.log('id: ', idCom)
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}categories/${idCom}/products`);
    return response;
  }
}
