import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactComponent } from './add-contact.component';

const routes: Routes = [{ path: '1', component: AddContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddContactRoutingModule { }
