import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pagempren',
  templateUrl: './pagempren.component.html',
  styleUrls: ['./pagempren.component.css']
})
export class PagemprenComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
