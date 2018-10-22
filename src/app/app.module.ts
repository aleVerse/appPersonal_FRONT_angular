import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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

import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { LoginDialogComponent } from './components/ventanasModal/login/login.modal.component';
import { NuevaTecnologiaDialogComponent } from './components/ventanasModal/nueva-tecnologia.modal/nueva-tecnologia.modal.component';
import { AuthenticationModule } from './authModule/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    HomeComponent,
    TecnologiasComponent,
    AccesoComponent,
    TecnologiasGridComponent,
    HerramientasComponent,
    LoginDialogComponent,
    NuevaTecnologiaDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent, NuevaTecnologiaDialogComponent]
})
export class AppModule { }
