import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePgmComponent } from './componets/home-pgm/home-pgm.component';



const routes: Routes = [
  { path: '', component: HomePgmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacepgmRoutingModule { }
