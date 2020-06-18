import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearactividadPageRoutingModule } from './crearactividad-routing.module';

import { CrearactividadPage } from './crearactividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearactividadPageRoutingModule
  ],
  declarations: [CrearactividadPage]
})
export class CrearactividadPageModule {}
