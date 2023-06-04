import { Component, OnInit } from '@angular/core';

import * as hotels from '../../../../data/hoteles.json';
import Swal from 'sweetalert2';
import { Util } from 'src/app/common/util';
import { Router } from '@angular/router';
import { Hotel, HotelView } from '@modules/hotel/models/hotel';

@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.css']
})
export class HotelListPageComponent implements OnInit {


  public HotelList: HotelView[] = [];
  private util:Util = new Util();

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.HotelList = this.calculateStats(this.saveDataHotels());
  }

  saveDataHotels(): Hotel[] {
    if(!this.util.getInfoLocal('hotelList')){
      this.util.saveInfoLocal('hotelList', hotels.default);
    }
    return this.util.getInfoLocal('hotelList');
  }

  changeStatus(item: Hotel) {
    this.util.msnShow(`${item.name} cambio de estado correctamente`);
  }

  calculateStats(hotels: Hotel[]): HotelView[] {
    const hotelViews: HotelView[] = [];

    for (const hotel of hotels) {
      const totalRooms = hotel.rooms.length;
      const totalAvailableRooms = hotel.rooms.filter(room => room.status && !room.reserved).length;
      const totalReservedRooms = hotel.rooms.filter(room => room.reserved).length;

      const hotelView: HotelView = {
        ...hotel,
        totalRooms,
        totalAvailableRooms,
        totalReservedRooms
      };

      hotelViews.push(hotelView);
    }

    return hotelViews;
  }

  goToEditHotel(id:number){
    this.util.setObj('edit', id);
    this._router.navigate(["/dashboard/hoteles/crear"]);
  }


}
