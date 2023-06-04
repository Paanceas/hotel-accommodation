import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  //TODO: router-outlet (Padre)
  {
    path: 'auth', //TODO (Public) Login, Register, Forgot...
    loadChildren: () =>
      import(`./modules/auth/auth.module`).then(m => m.AuthModule),
  },
  {
    path: '', //TODO (Public) Login, Register, Forgot...
    loadChildren: () =>
      import(`./modules/home/home.module`).then(m => m.HomeModule),
  },
  {
    path: 'dashboard', //TODO (Private) 🔴🔴
    component: DashboardPageComponent,
    loadChildren: () =>
      import(`./modules/dashboard/dashboard.module`).then(
        m => m.DashboardModule
      ),
    canActivate: [SessionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
