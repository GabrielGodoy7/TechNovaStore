import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DomesticosPageRoutingModule } from './domesticos-routing.module';

import { DomesticosPage } from './domesticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DomesticosPageRoutingModule
  ],
  declarations: [DomesticosPage]
})
export class DomesticosPageModule {}
