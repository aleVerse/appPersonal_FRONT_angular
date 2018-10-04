import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {

  formularioContacto = new FormGroup({
    nombreCompleto: new FormGroup({
      txtNombre: new FormControl(''),
      txtApellidos: new FormControl('')
    }),
    txtEmpresa: new FormControl(''),
    txtCorreo: new FormControl('')
  });

  mostrarMensajeCorrecto: boolean;

  constructor() { }

  ngOnInit() {
    this.mostrarMensajeCorrecto = false;
  }

  onSubmit() {
    this.mostrarMensajeCorrecto = true;
    console.warn(this.formularioContacto.value);
    // Enviar contra back
  }
}
