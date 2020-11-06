import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { Error404Component } from './error404/error404.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AltaEventoComponent } from './eventos/alta-evento/alta-evento.component';
import { ModificarEventoComponent } from './eventos/modificar-evento/modificar-evento.component';
import { EliminarEventoComponent } from './eventos/eliminar-evento/eliminar-evento.component';
import { TreballadorsComponent } from './treballadors/treballadors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventosComponent,
    Error404Component,
    AboutMeComponent,
    AltaEventoComponent,
    ModificarEventoComponent,
    EliminarEventoComponent,
    TreballadorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
