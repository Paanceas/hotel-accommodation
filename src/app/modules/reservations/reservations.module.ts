import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationlistPageComponent } from './pages/reservationlist-page/reservationlist-page.component';


@NgModule({
  declarations: [
    ReservationlistPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
