import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HostsComponent } from './hosts/hosts.component';
import { PedasComponent } from './pedas/pedas.component';
import { AlcoholesComponent } from './alcoholes/alcoholes.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'hosts/:id',
    component: HostsComponent
  },
  {
    path: 'pedas/:id',
    component: PedasComponent
  },
  {
    path: 'alcoholes/:id',
    component: AlcoholesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
