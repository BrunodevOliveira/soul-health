import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccreditedComponent } from './accredited/accredited.component';

const routes: Routes = [
  {
    path: '',
    component: AccreditedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
