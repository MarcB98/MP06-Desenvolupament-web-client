import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { NosaltresComponent } from './nosaltres/nosaltres.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AltaEventComponent } from './alta-event/alta-event.component';
import { ModificarEventComponent } from './modificar-event/modificar-event.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    EventsComponent,
    NosaltresComponent,
    NavbarComponent,
    AltaEventComponent,
    ModificarEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
