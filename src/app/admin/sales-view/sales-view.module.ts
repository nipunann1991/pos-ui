import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesViewRoutingModule } from './sales-view-routing.module';
import { SalesViewComponent } from './sales-view.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [SalesViewComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    SalesViewRoutingModule
  ]
})
export class SalesViewModule { }
