import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsViewComponent } from './pages/hotels-view/hotels-view.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { CreateReservationComponent } from './pages/create-reservation/create-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsViewComponent,
  },
  {
    path: 'details/:id',
    component: HotelDetailsComponent,
  },
  {
    path: 'reservation',
    component: CreateReservationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
