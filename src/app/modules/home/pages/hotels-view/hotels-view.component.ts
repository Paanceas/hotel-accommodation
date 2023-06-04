import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from '@modules/hotel/models/Hotel';
import { HotelReservation } from '@modules/reservations/models/Reservation';
import { Util } from 'src/app/common/util';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-hotels-view',
  templateUrl: './hotels-view.component.html',
  styleUrls: ['./hotels-view.component.css']
})
export class HotelsViewComponent implements OnInit {

  public cities: string[] = ["Buenos Aires", "Madrid", "Londres", "París", "Nueva York"];
  public HotelList: Hotel[] = [];
  private util:Util = new Util();

  private reservation:HotelReservation | null;
  public reservationForm: FormGroup = new FormGroup({});
  public isSearch: boolean = false;

  constructor(private _spinner: SpinnerService, private formBuilder: FormBuilder){
    this.reservation = null;
  }

  ngOnInit(): void {
    this.HotelList = this.util.setHotelList().filter((h:Hotel) => h.status);
    this.util.delInfoLocal('reservationInfo');
    this.createHotelForm();
  }

  search(){
    if(this.reservationForm.valid){
      this._spinner.loader(true);
      setTimeout(() => {
        this.reservation = {
          ...this.reservationForm.value
        }
        this.util.msnShow("Búsqueda exitosa");
        this._spinner.loader(false);
        this.isSearch = true;
        this.util.saveInfoLocal('reservationInfo', this.reservation);
      }, 500);
    }else{
      this.util.msnShow('Verifica la información suministrada', 'warning');
    }
  }

  createHotelForm() {
    this.reservationForm = this.formBuilder.group({
      checkInDate: [null, Validators.required],
      checkOutDate: [null, Validators.required],
      numberOfGuests: [null, Validators.required],
      destinationCity: [null, Validators.required]
    });
  }
}
