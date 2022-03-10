import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { SecondWayComponent } from './second-way/second-way.component';


@NgModule({
  declarations: [
    SecondWayComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
