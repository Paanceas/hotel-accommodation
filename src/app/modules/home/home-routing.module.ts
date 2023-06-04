import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsViewComponent } from './pages/hotels-view/hotels-view.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsViewComponent
  },
  {
    path: 'details/:id',
    component: HotelDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
