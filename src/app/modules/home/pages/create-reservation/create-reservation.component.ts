import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel, Room } from '@modules/hotel/models/Hotel';
import { GuestDetails, HotelReservation } from '@modules/reservations/models/Reservation';
import { Util } from 'src/app/common/util';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  public guestForm: FormGroup = new FormGroup({});
  public emergencyContactForm: FormGroup = new FormGroup({});
  private util: Util = new Util();

  public reservationInfo:HotelReservation | null = null;
  public reservationList:HotelReservation[]= [];
  public hotel:Hotel | null = null;
  constructor(private formBuilder: FormBuilder,private _spinner: SpinnerService, private _router:Router) { }

  ngOnInit(): void {
    this.getHotelById();
    this.buildForm();
  }

  private getHotelById(){
      this.reservationList = this.util.getInfoLocal('reservationsList');
      this.reservationInfo = this.util.getInfoLocal('reservationInfo');
      const hotelList:any[] = this.util.getInfoLocal('hotelList');
      this.hotel = hotelList.find((h: Hotel) => h.id === this.reservationInfo?.selectedIdHotel);
  }

  buildForm(): void {
    this.guestForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      emergencyContact: this.formBuilder.group({
        fullName: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
    if (this.guestForm.valid) {
      this._spinner.loader(true);
      setTimeout(() => {
        const reservation = {
          ...this.reservationInfo,
          guestDetails: {...this.guestForm.value},
          isReservationConfirmed: true
        };
        this.createReservation(reservation);
      }, 1000);

      // Realiza acciones adicionales con los datos del formulario
    }else{
      this.util.msnShow(`Revise la información suministrada`, 'warning');
    }
  }

  private createReservation(reservation:any){
    this._spinner.loader(false);
    this.util.msnShow(`Reserva ${reservation.uuid} creada exitosamente`);
    this._router.navigate(["/"]);
    this.reservationInfo = reservation;
    this.reservationList = [...this.reservationList, reservation];
    this.util.saveInfoLocal('reservationsList', this.reservationList);
    this.reservationList = this.util.getInfoLocal('reservationsList');
  }

}
