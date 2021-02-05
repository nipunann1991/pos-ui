import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsDialogBoxRoutingModule } from './views-dialog-box-routing.module';
import { ViewsDialogBoxComponent } from './views-dialog-box.component';
import { AppSharedModule } from 'src/app/app.shared.modules';
import { AddProductModule } from '../../product/add-product/add-product.module';
import { AddShopModule } from '../../shop/add-shop/add-shop.module';
import { AddContactModule } from '../../contact/add-contact/add-contact.module';
import { AddUsersModule } from '../../users/add-users/add-users.module';
import { AddPurchaseOrderModule } from '../../purchase-order/add-purchase-order/add-purchase-order.module';


@NgModule({
  declarations: [ViewsDialogBoxComponent],
  imports: [
    CommonModule,
    ViewsDialogBoxRoutingModule,
    AppSharedModule,
    AddProductModule,
    AddShopModule,
    AddContactModule,
    AddUsersModule,
    AddPurchaseOrderModule
  ], 
})
export class ViewsDialogBoxModule { }
