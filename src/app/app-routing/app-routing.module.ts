import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AccesoComponent } from '../components/opcionesMenu/acceso/acceso.component';
import { TecnologiasGridComponent } from '../components/opcionesMenu/tecnologias/tecnologias-grid/tecnologias-grid.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tecnologias', component: TecnologiasGridComponent, pathMatch: 'full' },
  { path: 'acceso', component: AccesoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
