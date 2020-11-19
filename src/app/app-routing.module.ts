import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'space-pgm',
    loadChildren: () => import('./modules/space-program/spacepgm.module').then(m => m.SpacepgmModule)
  },
  {
    path: '',
    redirectTo: 'space-pgm',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
