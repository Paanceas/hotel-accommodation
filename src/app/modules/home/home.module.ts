import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HotelsViewComponent } from './pages/hotels-view/hotels-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    HotelsViewComponent,
    HotelDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
