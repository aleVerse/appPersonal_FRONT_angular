import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NuevaTecnologiaDialogComponent } from '../ventanasModal/nueva-tecnologia.modal/nueva-tecnologia.modal.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tec-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss']
})
export class HerramientasComponent implements OnInit {

  eliminar: boolean;
  nombre: string;
  subtitulo: string;
  imagen: string;
  descripcion: string;

  constructor(public dialogo: MatDialog) { }

  ngOnInit() {
    this.eliminar = false;
  }


  eliminarRegistro() {
    this.eliminar = true;
  }

  abrirDialogo() {
    const dialogRef = this.dialogo.open(NuevaTecnologiaDialogComponent, {
      width: '450px',
      data: { nombre: this.nombre, subtitulo: this.subtitulo, descripcion: this.descripcion, imagen: this.imagen }
    });
  }

}
