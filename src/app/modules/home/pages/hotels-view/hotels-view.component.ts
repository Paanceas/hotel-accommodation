import { Component, OnInit } from '@angular/core';
import { Hotel } from '@modules/hotel/models/Hotel';
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

  constructor(private _spinner: SpinnerService){}

  ngOnInit(): void {
    this.HotelList = this.util.setHotelList().filter((h:Hotel) => h.status);
  }

  search(){
    this._spinner.loader(true);
    setTimeout(() => {
      this.util.msnShow("Búsqueda exitosa")
      this._spinner.loader(false);
    }, 1000);
  }

}
