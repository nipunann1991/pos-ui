import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactRoutingModule } from './add-contact-routing.module';
import { AddContactComponent } from './add-contact.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [AddContactComponent],
  imports: [
    CommonModule, 
    AddContactRoutingModule,
    AppSharedModule,
   
  ],
  exports: [AddContactComponent],
})
export class AddContactModule { }
