import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelListPageComponent } from './components/hotel-list-page/hotel-list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateHotelPageComponent } from './components/create-hotel-page/create-hotel-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HotelListPageComponent,
    CreateHotelPageComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelModule { }
