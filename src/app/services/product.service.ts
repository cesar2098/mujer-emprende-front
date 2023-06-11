import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:8080/comercio/catalogos';

  private products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProduct(idCom:number): Observable<Product[]> {
    // console.log('id: ', idCom)
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}/productcomercio/${idCom}`);
    response.pipe().subscribe(
      (response: any) => {
        this.products = response.respuesta;
      }
    );    
    return response;
  }

  saveProducto(producto: Product): Observable<any> {
    const response = this.httpClient.post(`${this.baseUrl}/save`, producto);
    response.pipe().subscribe(
      (response: any) => {
        this.products = response.respuesta;
      }
    );
    return response;
  }
}
