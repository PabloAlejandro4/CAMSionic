import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentralesPageRoutingModule } from './centrales-routing.module';

import { CentralesPage } from './centrales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentralesPageRoutingModule
  ],
  declarations: [CentralesPage]
})
export class CentralesPageModule {}
