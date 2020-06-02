import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivosPage } from './correctivos.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivosPageRoutingModule {}
