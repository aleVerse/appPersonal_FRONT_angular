import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageCasaRoja: string;
  imageEdificio: string;
  imageFresas: string;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.imageCasaRoja = '/src/assets/images/casaRoja.jpg';
    this.imageEdificio = '/src/assets/images/edificio.jpg';
    this.imageFresas = '/src/assets/images/fresas.jpg';

    $('.carousel').carousel({
      interval: 10000
    });
  }
}
