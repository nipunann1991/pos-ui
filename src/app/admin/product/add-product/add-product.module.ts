import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    AddProductRoutingModule
  ], 
  exports: [AddProductComponent], 
})
export class AddProductModule { }
