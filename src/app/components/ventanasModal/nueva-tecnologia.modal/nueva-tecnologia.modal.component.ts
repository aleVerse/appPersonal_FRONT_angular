import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TecnologiaInfo } from '../../../model/TecnologiaInfo.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tec-new-modal',
  templateUrl: './nueva-tecnologia.modal.component.html',
  styleUrls: ['./nueva-tecnologia.modal.component.scss']
})
export class NuevaTecnologiaDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NuevaTecnologiaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public datosDialogo: TecnologiaInfo) { }

  ngOnInit() {
  }

  guardar() {
    console.log('inicio de sesión enviado '
      + 'nombre:' + this.datosDialogo.nombre +
      'subtitulo' + this.datosDialogo.subtitulo +
      'descripcion' + this.datosDialogo.descripcion +
      'imagen' + this.datosDialogo.imagen
    );

  }

  close(): void {
    this.dialogRef.close();
  }
}
