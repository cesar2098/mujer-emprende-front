import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasardatosService } from 'src/app/services/pasardatos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string="";
  password: string="";
  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(url:string) {
    console.log(this.usuario);
    console.log(this.password);
    this.router.navigate([url]);
  }
}
