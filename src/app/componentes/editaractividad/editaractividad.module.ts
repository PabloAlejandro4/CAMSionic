import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaractividadPageRoutingModule } from './editaractividad-routing.module';

import { EditaractividadPage } from './editaractividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaractividadPageRoutingModule
  ],
  declarations: [EditaractividadPage]
})
export class EditaractividadPageModule {}
