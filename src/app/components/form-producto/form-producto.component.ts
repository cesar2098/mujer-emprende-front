import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { PasardatosService } from 'src/app/services/pasardatos.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  products: any[] = [];
  formulario: FormGroup;
  respuesta: any;

  constructor(private fb: FormBuilder, private productoService: ProductService, private pasardatosservice: PasardatosService) { 
    this.formulario = this.fb.group({
      nombre: '',
      descripcion: '',
      logo: ''
    });
  }

  producto: Product = {
    idCatalogos: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: [],
    activo: 1
  };

  //Creación de formulario
  formGroup: FormGroup = this.fb.group({
    nombre: [{ value: this.producto.nombre , disabled: false }],
    descripcion: [{ value: this.producto.descripcion , disabled: false }],
    precio: [{ value: this.producto.precio , disabled: false }],
    imagen: [{ value: this.producto.imagen , disabled: false }],
    activo: [{ value: this.producto.activo , disabled: false }]  
  });

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    // console.log('DATO SETEADO DESDE COMERCIOS');
    // console.log(this.pasardatosservice.idComer);
      this.productoService.getProduct(this.pasardatosservice.idComer).subscribe((data)=>{
      this.respuesta = data;
      this.products = this.respuesta.respuesta;
      // return this.products=data;
    })
  }

  submit() {  
    console.log(this.formGroup.value);
    this.productoService.saveProducto(this.formGroup.value).subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

}
