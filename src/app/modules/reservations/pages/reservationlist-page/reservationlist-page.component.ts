import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelReservation } from '@modules/reservations/models/Reservation';
import { Util } from 'src/app/common/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservationlist-page',
  templateUrl: './reservationlist-page.component.html',
  styleUrls: ['./reservationlist-page.component.css']
})
export class ReservationlistPageComponent implements OnInit  {

  public reservationsList:HotelReservation [] = [];
  private util:Util = new Util();

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.reservationsList = this.util.setReservationsList();
  }

  goToViewReservation(reservation:HotelReservation){
    this.util.setObj('editReservation', reservation);
    this._router.navigate(["/dashboard/reservaciones/crear"]);
  }

  reservaciones(reservation:HotelReservation) {
    Swal.fire({
      title: `¿Estás seguro de eliminar la reserva de ${reservation.guestDetails.fullName}?`,
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: `Sí eliminar`
    }).then((result:any) => {
      if (result.isConfirmed) {
        console.log(result);
      }
    })
  }

}
