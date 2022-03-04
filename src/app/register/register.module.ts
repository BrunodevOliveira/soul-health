import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../app-shared/shared-module/shared.module';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
