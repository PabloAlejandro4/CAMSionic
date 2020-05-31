import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivosPageRoutingModule } from './correctivos-routing.module';

import { CorrectivosPage } from './correctivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectivosPageRoutingModule
  ],
  declarations: [CorrectivosPage]
})
export class CorrectivosPageModule {}
