import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamerPage } from './gamer.page';

const routes: Routes = [
  {
    path: '',
    component: GamerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamerPageRoutingModule {}
