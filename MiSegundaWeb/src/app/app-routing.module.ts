import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { Error404Component } from './error404/error404.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'error404', component: Error404Component},
  { path: 'eventos', component: EventosComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
