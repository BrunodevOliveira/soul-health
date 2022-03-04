import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionalRoutingModule } from './aboutInstitutional-routing.module';
import { SharedModule } from '../app-shared/shared-module/shared.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
  AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InstitutionalRoutingModule
  ]
})
export class InstitutionalModule { }
