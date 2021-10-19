import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TareasComponent } from './components/tareas/tareas.component';
import { TareasPrivadasComponent } from './components/tareas-privadas/tareas-privadas.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { MedicoDerivanteComponent } from './components/medico-derivante/medico-derivante.component';
import { AltaMedicoDerivanteComponent } from './components/medico-derivante/alta-medico-derivante/alta-medico-derivante.component'

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tareas',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    component: TareasComponent
  },
  {
    path: 'tareas-privadas',
    component: TareasPrivadasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'medicos-derivante',
    component: MedicoDerivanteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alta-medicos-derivante',
    component: AltaMedicoDerivanteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editar-medicos-derivante/:id',
    component: AltaMedicoDerivanteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
