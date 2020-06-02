import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentralesPage } from './centrales.page';

const routes: Routes = [
  {
    path: '',
    component: CentralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentralesPageRoutingModule {}
