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

  getProduct(): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}products`);
    return response;
  }

  getCategoria(): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}categories/1/products`);
    return response;
  }
}
