import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleosComponent } from './empleos/empleos.component';
import { IndexComponent } from './index/index.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '',component: IndexComponent},
  {path: 'empleos',component: EmpleosComponent},
  {path: 'registro',component: RegistroComponent},
  {path: 'login',component: IniciarSesionComponent},
  {path: 'perfil',component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
