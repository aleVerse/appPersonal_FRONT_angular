import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthenticationService } from '../../../authModule/authentication.service';
import { FormControl } from '@angular/forms';
import { TokenAlmacenamiento } from '../../../authModule/token-Almacenamiento.service';

export interface Sesion {
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

  nombre: string;
  contra: string;
  nombreFormControl: FormControl;
  contraFormControl: FormControl;

  constructor(private authService: AuthenticationService, private token: TokenAlmacenamiento,
    public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
    this.nombreFormControl = new FormControl();
    this.contraFormControl = new FormControl();

  }

  close(): void {
    this.dialogRef.close();
  }

  login(valores: Sesion) {
    console.log('inicio de sesión enviado nombre: ' + JSON.stringify(valores));
  }

  // Validators
  isWrongRequired(formControl: FormControl) {
    return formControl.touched && formControl.dirty && formControl.hasError('required');
  }

}
