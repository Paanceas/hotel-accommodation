import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListPageComponent } from './pages/hotel-list-page/hotel-list-page.component';
import { CreateHotelPageComponent } from './pages/create-hotel-page/create-hotel-page.component';

const routes: Routes = [
  {
    path: '',
    component: HotelListPageComponent,
  },
  {
    path: 'consulta',
    component: HotelListPageComponent,
  },
  {
    path: 'crear',
    component: CreateHotelPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
