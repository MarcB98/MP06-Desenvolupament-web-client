import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { NosaltresComponent } from './nosaltres/nosaltres.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inici'},
  {path: 'inici', component: IniciComponent},
  {path: 'events', component: EventsComponent},
  {path: 'nosaltres', component: NosaltresComponent},
  {path: '**', redirectTo: 'inici'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
