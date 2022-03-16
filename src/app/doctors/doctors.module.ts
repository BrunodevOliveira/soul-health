import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { AccreditedComponent } from './accredited/accredited.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    AccreditedComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
