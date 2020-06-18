import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevocorrectivoPage } from './nuevocorrectivo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevocorrectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevocorrectivoPageRoutingModule {}
