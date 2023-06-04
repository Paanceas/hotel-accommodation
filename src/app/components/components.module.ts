import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [SidebarComponent, HeaderComponent, NavbarComponent],
})
export class ComponentsModule {}
