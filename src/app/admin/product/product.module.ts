import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AppSharedModule } from '../../app.shared.modules';
import { AddProductModule } from './add-product/add-product.module';
import { DialogBoxComponent } from '../common/dialog-box/dialog-box.component';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    AddProductModule,
    ProductRoutingModule, 
  ],

  exports: [ProductComponent]
 
})
export class ProductModule { }
