import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomesticosPage } from './domesticos.page';

const routes: Routes = [
  {
    path: '',
    component: DomesticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomesticosPageRoutingModule {}
