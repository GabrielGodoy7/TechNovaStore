import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamerPageRoutingModule } from './gamer-routing.module';

import { GamerPage } from './gamer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamerPageRoutingModule
  ],
  declarations: [GamerPage]
})
export class GamerPageModule {}
