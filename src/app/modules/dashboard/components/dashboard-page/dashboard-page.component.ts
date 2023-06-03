import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  sizeView(event: any) {
    const template = document.querySelector(".sidebar");
    const body = document.querySelector(".body");
    if (event) {
      template?.classList.add("expander");
      body?.classList.add("body-expander");
    } else {
      template?.classList.remove("expander");
      body?.classList.remove("body-expander");
    }
  }

}
