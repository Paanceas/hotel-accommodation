import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelReservation } from '@modules/reservations/models/Reservation';
import { Util } from 'src/app/common/util';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit{

  private util:Util = new Util();

  public reservation: HotelReservation | null = null;

  constructor(private _router:Router){

  }

  ngOnInit(): void {
    this.reservation = this.util.getObj('editReservation', true);
    this.util.delObj('editReservation');
    if(!this.reservation){
      this._router.navigate(["/dashboard/reservaciones"]);
    }
  }

}
