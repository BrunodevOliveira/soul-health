import { NavbarComponent } from '../../../app/app-shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';





@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    NavbarComponent,

  ]
})
export class SharedModule { }
