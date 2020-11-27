import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { AdminComponent } from './admin/admin.component';
import { ListaUsuarioComponent } from './perfil-usuario/lista-usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './perfil-usuario/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Error404Component,
    PerfilUsuarioComponent,
    RegistroUsuarioComponent,
    AdminComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
