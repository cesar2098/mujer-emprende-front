import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comercio } from 'src/app/models/comercios';

@Component({
  selector: 'app-form-comercio',
  templateUrl: './form-comercio.component.html',
  styleUrls: ['./form-comercio.component.css'],
})
export class FormComercioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formulario = this.fb.group({
      nombre: '',
      descripcion: '',
      logo: ''
    });
  }

  comercio: Comercio = {
    idComercio: 0,
    nombre: '',
    descripcion: '',
    logo: '',
    activo: 1,
    created: new Date()
  };

  ngOnInit(): void {
  }

  //Creación de formulario
  formGroup: FormGroup = this.fb.group({
    nombre: [{ value: this.comercio.nombre , disabled: false }],
    descripcion: [{ value: this.comercio.descripcion , disabled: false }],
    logo: [{ value: this.comercio.logo , disabled: false }]    
  });

  submit() {  
    console.log(this.formGroup.value);
  }

}
