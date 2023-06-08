import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/models/comercios';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  comercios: Comercio[] = [];
  constructor(
    private comerciosService: ComerciosService
  ) { }

  ngOnInit(): void {
  }
}
