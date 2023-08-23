import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gamer',
    loadChildren: () => import('./gamer/gamer.module').then( m => m.GamerPageModule)
  },
  {
    path: 'domesticos',
    loadChildren: () => import('./domesticos/domesticos.module').then( m => m.DomesticosPageModule)
  },  {
    path: 'smartphones',
    loadChildren: () => import('./smartphones/smartphones.module').then( m => m.SmartphonesPageModule)
  },
  {
    path: 'componentes',
    loadChildren: () => import('./componentes/componentes.module').then( m => m.ComponentesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
