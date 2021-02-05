import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUsersRoutingModule } from './add-users-routing.module';
import { AddUsersComponent } from './add-users.component';
import { AppSharedModule } from '../../../app.shared.modules';


@NgModule({
  declarations: [AddUsersComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    AddUsersRoutingModule
  ],
  exports: [AddUsersComponent], 
})
export class AddUsersModule { }
