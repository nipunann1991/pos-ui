import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPurchaseOrderRoutingModule } from './add-purchase-order-routing.module';
import { AddPurchaseOrderComponent } from './add-purchase-order.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [AddPurchaseOrderComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    AddPurchaseOrderRoutingModule
  ],
  exports: [AddPurchaseOrderComponent],
})
export class AddPurchaseOrderModule { }
