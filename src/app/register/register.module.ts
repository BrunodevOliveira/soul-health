import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../app-shared/shared-module/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RegisterRoutingModule,
    NgxMaskModule.forChild()
  ]
})
export class RegisterModule { }
