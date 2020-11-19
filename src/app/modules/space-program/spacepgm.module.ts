import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacepgmRoutingModule } from './spacepgm-routing.module';
import { HomePgmComponent } from './componets/home-pgm/home-pgm.component';
import { SpacepgmService } from './services/spacepgm.service';


@NgModule({
  declarations: [
    HomePgmComponent
  ],
  imports: [
    CommonModule,
    SpacepgmRoutingModule
  ],
  exports: [
    HomePgmComponent
  ],
  providers: [
    SpacepgmService
  ]
})
export class SpacepgmModule { }
