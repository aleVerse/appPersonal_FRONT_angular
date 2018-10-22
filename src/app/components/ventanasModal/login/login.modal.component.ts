import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TokenAlmacenamiento } from '../../../accessToken/token.almacenamiento';
import { AuthenticationService } from '../../../authModule/service/authentication.service';

export interface DatosDialogo {
  nombre: string;
  contra: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-modal',
  templateUrl: './login.modal.component.html',
  styleUrls: ['./login.modal.component.scss'],
  providers: [TokenAlmacenamiento]
})
export class LoginDialogComponent implements OnInit {

  constructor(private authService: AuthenticationService, private token: TokenAlmacenamiento,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosDialogo) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  login() {
    console.log('inicio de sesión enviado nombre:' + this.data.nombre + 'contraseña' + this.data.contra);
  }
}
