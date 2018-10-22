import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { TokenAlmacenamiento } from './accessToken/token.almacenamiento';
@NgModule({
    declarations: [TokenAlmacenamiento],
    providers: [AuthenticationService],
    exports: [TokenAlmacenamiento]
})
export class AuthenticationModule {
}
