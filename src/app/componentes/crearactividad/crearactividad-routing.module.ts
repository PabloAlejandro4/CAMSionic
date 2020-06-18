import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearactividadPage } from './crearactividad.page';

const routes: Routes = [
  {
    path: '',
    component: CrearactividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearactividadPageRoutingModule {}
