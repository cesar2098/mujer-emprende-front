import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comercio } from 'src/app/models/comercios';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formulario = this.fb.group({
      nombres: '',
      apellidos: '',
      correo: '',
      contacto: '',
      direccion: '',
      rol: '',
      password: '',
    });
  }

  usuario: Usuario = {
    idUsuario: 0,
    nombres: '',
    apellidos: '',
    correo: '',
    contacto: '',
    direccion: '',
    rol: '',
    password: '',
    activo: 1,
    created: new Date(),
    idComercio: new Comercio(0, '', '', '', 1, new Date())
  };

  ngOnInit(): void {
  }

   //Creación de formulario
   formGroup: FormGroup = this.fb.group({
    nombres: [{ value: this.usuario.nombres , disabled: false }],
    apellidos: [{ value: this.usuario.apellidos , disabled: false }],
    correo: [{ value: this.usuario.correo , disabled: false }],
    contacto: [{ value: this.usuario.contacto , disabled: false }],
    direccion: [{ value: this.usuario.direccion , disabled: false }],
    rol: [{ value: this.usuario.rol , disabled: false }],
    password: [{ value: this.usuario.password , disabled: false }],
    activo: [{ value: this.usuario.activo , disabled: false }],
    created: [{ value: this.usuario.created , disabled: false }],
    idComercio: [{ value: this.usuario.idComercio , disabled: false }]
  });

  submit() {  
    console.log(this.formGroup.value);
  }

}
