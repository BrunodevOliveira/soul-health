import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../app-shared/shared-module/shared.module';
import { BeneficiaryUserRoutingModule } from './beneficiaryUser-routing.module';
import { HomeUserComponent } from './homeUser/homeUser.component';


@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BeneficiaryUserRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BeneficiaryUserModule { }
