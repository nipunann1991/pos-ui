import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    ReportsRoutingModule
  ],
  exports: [ReportsComponent],
})
export class ReportsModule { }
