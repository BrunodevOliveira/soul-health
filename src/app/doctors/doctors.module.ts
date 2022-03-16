import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { AccreditedComponent } from './accredited/accredited.component';


@NgModule({
  declarations: [
    AccreditedComponent,
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
