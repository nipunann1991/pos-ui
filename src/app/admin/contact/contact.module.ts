import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { AppSharedModule } from 'src/app/app.shared.modules';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    ContactRoutingModule, 
  ],
  exports:[ContactComponent]
})
export class ContactModule { }
