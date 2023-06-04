import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationlistPageComponent } from './pages/reservationlist-page/reservationlist-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';


@NgModule({
  declarations: [
    ReservationlistPageComponent,
    ReservationPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
