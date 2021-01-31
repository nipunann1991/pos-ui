import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { AppSharedModule } from "../app.shared.modules"; 

@NgModule({
  declarations: [AdminComponent, HeaderComponent, NavComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    AdminRoutingModule, 
  ]
})
export class AdminModule { }
