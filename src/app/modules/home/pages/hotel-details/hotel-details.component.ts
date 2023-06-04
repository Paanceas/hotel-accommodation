import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hotel, Room } from '@modules/hotel/models/Hotel';
import { HotelReservation } from '@modules/reservations/models/Reservation';
import { Util } from 'src/app/common/util';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  private util: Util = new Util();
  public hotel: Hotel | null = null;
  private reservation: HotelReservation | null;

  constructor(
    private rutaActiva: ActivatedRoute,
    private _router:Router
    ) {
    this.reservation = null;
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        const { id } = params;
        this.hotel = this.getHotelById(parseInt(id));
      }
    );
  }

  private getHotelById(id: number): Hotel | null {
    try {
      const hotelList:any[] = this.util.getInfoLocal('hotelList');
      this.reservation = this.util.getInfoLocal('reservationInfo');
      const hotel = hotelList.find((h: Hotel) => h.id === id);
      hotel.rooms = hotel?.rooms.filter((h: Room) => !h.reserved && h.status);
      this.updateReservation({
        selectedIdHotel: id
      })
      return hotel ? hotel : null;
    } catch (error) {
      console.error('error :>> ', error);
      this._router.navigate(["/"]);
      return null;
    }
  }

  private updateReservation(data:any){
    const reservation = {
      ...this.reservation,
      ...data
    }
    this.util.saveInfoLocal('reservationInfo', reservation);
    this.reservation = this.util.getInfoLocal('reservationInfo');
  }

  goToReservation(room:Room) {
    this.util.msnShow(`Se asigno la habitación ${room.name} correctamente`, 'info')
    this.updateReservation({
      selectedRoom:room,
      isReservationConfirmed: false
    });
    this._router.navigate(["/reservation"]);
  }

}
