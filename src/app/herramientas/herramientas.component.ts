import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tec-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss']
})
export class HerramientasComponent implements OnInit {

  eliminar: boolean;

  constructor() { }

  ngOnInit() {
    this.eliminar = false;
  }


  eliminarRegistro() {
    this.eliminar = true;
  }
}
