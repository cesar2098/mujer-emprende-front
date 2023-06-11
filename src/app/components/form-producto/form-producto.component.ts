import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { 
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
  };

  //Creación de formulario
  formGroup: FormGroup = this.fb.group({
    nombre: [{ value: this.producto.nombre , disabled: false }],
    descripcion: [{ value: this.producto.descripcion , disabled: false }],
    precio: [{ value: this.producto.precio , disabled: false }],
    imagen: [{ value: this.producto.imagen , disabled: false }]    
  });

  ngOnInit(): void {
  }

  submit() {  
    console.log(this.formGroup.value);
  }

}
