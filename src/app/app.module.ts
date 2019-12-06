import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HostsComponent } from './hosts/hosts.component';
import { PedasComponent } from './pedas/pedas.component';
import { AlcoholesComponent } from './alcoholes/alcoholes.component';
import { UsuarioPedasComponent } from './usuariopedas/usuariopedas.component';
import { HostPedasComponent } from './hostpedas/hostpedas.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HostsComponent,
    PedasComponent,
    AlcoholesComponent,
    UsuarioPedasComponent,
    HostPedasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
