import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsDialogBoxRoutingModule } from './views-dialog-box-routing.module';
import { ViewsDialogBoxComponent } from './views-dialog-box.component';
import { AppSharedModule } from 'src/app/app.shared.modules';
import { AddProductModule } from '../../product/add-product/add-product.module';
import { AddShopModule } from '../../shop/add-shop/add-shop.module';


@NgModule({
  declarations: [ViewsDialogBoxComponent],
  imports: [
    CommonModule,
    ViewsDialogBoxRoutingModule,
    AppSharedModule,
    AddProductModule,
    AddShopModule

  ]
})
export class ViewsDialogBoxModule { }
