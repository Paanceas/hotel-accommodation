import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hotel-accommodation';

  constructor( private sv:SpinnerService){

  }

  ngOnInit(): void {
    this.sv.loader(true);
    setTimeout(() => {
      this.sv.loader(false);
    }, 3000);
  }



}
