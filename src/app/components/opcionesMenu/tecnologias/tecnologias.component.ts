import { Component, OnInit, Input } from '@angular/core';
import { TecnologiaInfo } from '../../../model/TecnologiaInfo.model';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})

/*
  TecnologiaInfo
  nombre: 'Angular',
  subtitulo: 'v5',
  imagen: '/src/assets/images/angular.svg',
  descripcion: 'Para la parte frontal de la aplicacion se ha utiliza Angular.'
*/
export class TecnologiasComponent implements OnInit {

  @Input() info: TecnologiaInfo;
  @Input() posicion: number;

  constructor() { }

  ngOnInit() {
  }

}
