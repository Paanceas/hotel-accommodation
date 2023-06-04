import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hotel, Room } from '@modules/hotel/models/Hotel';
import { GuestDetails, HotelReservation } from '@modules/reservations/models/Reservation';
import { Util } from 'src/app/common/util';

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
  public hotel:Hotel | null = null;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getHotelById();
    this.buildForm();
  }

  private getHotelById(){
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
      const guestDetails: GuestDetails = this.guestForm.value;
      console.log(guestDetails);
      // Realiza acciones adicionales con los datos del formulario
    }
  }
}
