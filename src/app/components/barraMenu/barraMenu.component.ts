import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../ventanasModal/login/login.modal.component';


@Component({
    selector: 'app-nav',
    templateUrl: './barraMenu.component.html',
    styleUrls: ['./barraMenu.component.scss']
})
export class BarraMenuComponent implements OnInit {

    nombre: string;
    contraseña: string;

    constructor(public dialogo: MatDialog) { }

    ngOnInit(): void { }

    abrirDialogoLogin() {
        const dialogRef = this.dialogo.open(LoginDialogComponent, {
            width: '450px',
            data: { nombre: this.nombre, contraseña: this.contraseña }
        });
    }

    /*
    Evento lanzado cuando se cierra el diálogo

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
    */
}
