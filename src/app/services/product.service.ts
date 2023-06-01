import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Consola 1', 'Descripcion 1', 35.60, 'https://m.media-amazon.com/images/I/71pIS8f417L._AC_UL320_.jpg'),
    new Product(2, 'Consola 2', 'Descripcion 2', 17.75, 'https://m.media-amazon.com/images/I/51POjcheFiL._AC_UL320_.jpg'),
    new Product(3, 'Consola 3', 'Descripcion 3', 21.89, 'https://m.media-amazon.com/images/I/61gndBOP9zS._AC_UL320_.jpg'),
    new Product(4, 'Consola 4', 'Descripcion 4', 44.35, 'https://m.media-amazon.com/images/I/71VRxu+uxQL._AC_UL320_.jpg'),
    new Product(5, 'Consola 5', 'Descripcion 5', 79.80, 'https://m.media-amazon.com/images/I/81nR+63UjqL._AC_UL320_.jpg'),
    new Product(6, 'Consola 6', 'Descripcion 6', 85.25, 'https://m.media-amazon.com/images/I/91O9Uk5oWAL._AC_UL320_.jpg'),
  ];

  constructor() { }
  getProduct(): Product[] {
    return this.products;
  }
}
