import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component'; 
import { AppSharedModule } from '../../app.shared.modules';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    DashboardRoutingModule,
    ProductModule,
  ]
})
export class DashboardModule { }
