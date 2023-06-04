import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationlistPageComponent } from './pages/reservationlist-page/reservationlist-page.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationlistPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
