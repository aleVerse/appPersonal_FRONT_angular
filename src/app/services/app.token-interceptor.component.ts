import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpUserEvent
} from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { TokenAlmacenamiento } from '../authModule/token-Almacenamiento.service';
import { Observable } from '../../../node_modules/rxjs';
import { HttpResponse } from '../../../node_modules/@types/selenium-webdriver/http';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private token: TokenAlmacenamiento, private router: Router) { }

    /*
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return next.handle(req);
    }
    */

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        let authReq = req;
        if (this.token.getToken() != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken()) });
        }
        return next.handle(authReq)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        console.log(' all looks good');
                        // http response status code
                        console.log(event.type);
                    }
                }, error => {
                    // http response status code
                    console.log('----response----');
                    console.error('status code:');
                    console.error(error.status);
                    console.error(error.message);
                    console.log('--- end of response---');

                })
            );
    }
}