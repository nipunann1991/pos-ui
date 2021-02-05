import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AppSharedModule } from '../../app.shared.modules';
import { AddUsersModule } from './add-users/add-users.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    UsersRoutingModule, 
    AddUsersModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
