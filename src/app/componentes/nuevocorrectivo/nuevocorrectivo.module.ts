import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevocorrectivoPageRoutingModule } from './nuevocorrectivo-routing.module';

import { NuevocorrectivoPage } from './nuevocorrectivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevocorrectivoPageRoutingModule
  ],
  declarations: [NuevocorrectivoPage]
})
export class NuevocorrectivoPageModule {}
