import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { EmpleosComponent } from './empleos/empleos.component';
import { EmpleosDetallesComponent } from './empleos-detalles/empleos-detalles.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListaEmpleosComponent } from './lista-empleos/lista-empleos.component';
import { CardEmpleoComponent } from './card-empleo/card-empleo.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    RegistroComponent,
    IniciarSesionComponent,
    EmpleosComponent,
    EmpleosDetallesComponent,
    BuscadorComponent,
    ListaEmpleosComponent,
    CardEmpleoComponent,
    FooterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
