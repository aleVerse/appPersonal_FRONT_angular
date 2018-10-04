import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BarraMenuComponent } from './components/barraMenu/barraMenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './angular_material/material.module';
import { HomeComponent } from './components/home/home.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TecnologiasComponent } from './components/opcionesMenu/tecnologias/tecnologias.component';
import { AccesoComponent } from './components/opcionesMenu/acceso/acceso.component';
import { TecnologiasGridComponent } from './components/opcionesMenu/tecnologias/tecnologias-grid/tecnologias-grid.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    HomeComponent,
    TecnologiasComponent,
    AccesoComponent,
    TecnologiasGridComponent,
    HerramientasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
