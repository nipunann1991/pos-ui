import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogBoxRoutingModule } from './confirm-dialog-box-routing.module';
import { ConfirmDialogBoxComponent } from './confirm-dialog-box.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [ConfirmDialogBoxComponent],
  imports: [
    CommonModule, 
    ConfirmDialogBoxRoutingModule,
    AppSharedModule
    
  ],

  entryComponents: [ConfirmDialogBoxComponent]
})
export class ConfirmDialogBoxModule { }
