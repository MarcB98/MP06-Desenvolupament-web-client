import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'inicio', component: InicioComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
