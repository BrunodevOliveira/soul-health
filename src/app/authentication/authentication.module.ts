import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../app-shared/shared-module/shared.module';
import { AutenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AutenticationRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AutenticationModule { }
