import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Room } from '@modules/hotel/models/Hotel';
import { Hotel } from '@modules/hotel/models/Hotel';
import { Util } from 'src/app/common/util';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  private util: Util = new Util();
  public hotel:Hotel | null = null;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        const { id } = params;
        this.hotel = this.getHotelById(parseInt(id));
      }
    );
  }

  getHotelById(id: number): Hotel | null {
    const hotelList = this.util.getInfoLocal('hotelList');
    const hotel:Hotel = hotelList.find((h: Hotel) => h.id === id);
    hotel.rooms = hotel.rooms.filter((h: Room) => !h.reserved && h.status);
    return hotel ? hotel : null;
  }

}
