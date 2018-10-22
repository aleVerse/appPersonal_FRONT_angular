import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class AuthenticationService {

    public isAuthenticated = false;

    private API_URL = environment.API_URL;
    private TOKEN_URL = '/token/generarToken';

    constructor(private peticion: HttpClient) { }

    authToken(nombreusuario: string, contraseña: string): Observable<any> {
        const credentials = { nombreusuario: nombreusuario, contraseña: contraseña };
        console.log('Petición de token');
        return this.peticion.post(this.API_URL + this.TOKEN_URL, credentials);
    }


    /*
    authenticate(credentials, callback) {
        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {}
        );

        this.peti.get('user', {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.isAuthenticated = true;
            } else {
                this.isAuthenticated = false;
            }
            return callback && callback();
        });

    }*/
}
