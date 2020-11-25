import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { Error404Component } from './error404/error404.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'perfil-usuario' },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent},
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'error404', component: Error404Component},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
