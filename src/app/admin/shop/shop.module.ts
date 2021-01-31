import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { AppSharedModule } from '../../app.shared.modules';


@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    ShopRoutingModule,  
  ]
})
export class ShopModule { }
