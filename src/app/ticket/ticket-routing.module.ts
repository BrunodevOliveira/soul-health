import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondWayComponent } from './second-way/second-way.component';

const routes: Routes = [
  {
    path: '',
    component: SecondWayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
