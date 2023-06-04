import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsViewComponent } from './pages/hotels-view/hotels-view.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
