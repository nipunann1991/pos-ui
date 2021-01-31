import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddShopRoutingModule } from './add-shop-routing.module';
import { AddShopComponent } from './add-shop.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [AddShopComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    AddShopRoutingModule
  ],
  exports: [AddShopComponent]
})
export class AddShopModule { }
