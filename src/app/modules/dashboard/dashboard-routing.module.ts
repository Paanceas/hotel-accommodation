import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hotel',
    loadChildren: () => import('@modules/hotel/hotel.module').then(m => m.HotelModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('@modules/rooms/rooms.module').then(m => m.RoomsModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('@modules/reservations/reservations.module').then(m => m.ReservationsModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
