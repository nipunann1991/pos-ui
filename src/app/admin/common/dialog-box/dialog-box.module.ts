import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogBoxRoutingModule } from './dialog-box-routing.module';
import { DialogBoxComponent } from './dialog-box.component'; 
import { ProductModule } from '../../product/product.module';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [DialogBoxComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    DialogBoxRoutingModule, 
    ProductModule
  ]
})
export class DialogBoxModule { }
