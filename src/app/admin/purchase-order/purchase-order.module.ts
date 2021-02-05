import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderComponent } from './purchase-order.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [PurchaseOrderComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    PurchaseOrderRoutingModule
  ],
  exports: [PurchaseOrderComponent]
})
export class PurchaseOrderModule { }
