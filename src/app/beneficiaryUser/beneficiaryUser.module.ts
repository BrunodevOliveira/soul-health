import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../app-shared/shared-module/shared.module';
import { BeneficiaryUserRoutingModule } from './beneficiaryUser-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    BeneficiaryUserRoutingModule
  ]
})
export class BeneficiaryUserModule { }
