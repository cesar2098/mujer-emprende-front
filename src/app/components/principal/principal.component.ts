import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.filtroCategoria();
  }

  filtroCategoria(){
    this.productService.getCategoria().subscribe((data)=>{
      return this.products=data;
    })
  }

  selectedOption = 0;
  actions = [{ id: 0, name: '' },
  { id: 1, name: 'Limpieza' },
  { id: 2, name: 'Accesorios' },
  { id: 3, name: 'Servicios'}];

}
