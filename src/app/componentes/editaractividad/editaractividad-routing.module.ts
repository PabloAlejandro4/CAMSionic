import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaractividadPage } from './editaractividad.page';

const routes: Routes = [
  {
    path: '',
    component: EditaractividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaractividadPageRoutingModule {}
