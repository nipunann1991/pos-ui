import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    AppSharedModule
  ],
  exports: [InvoiceComponent],
})
export class InvoiceModule { }
