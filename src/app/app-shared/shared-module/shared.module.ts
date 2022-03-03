import { NavbarComponent } from '../../../app/app-shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from 'src/app/signin/signin.component';





@NgModule({
  declarations: [
    NavbarComponent,
    SigninComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SigninComponent

  ]
})
export class SharedModule { }
