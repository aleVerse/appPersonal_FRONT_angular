import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { TokenAlmacenamiento } from './token-Almacenamiento.service';
@NgModule({
    providers: [TokenAlmacenamiento, AuthenticationService]
})
export class AuthenticationModule {
}
