import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPurchaseOrderComponent } from './add-purchase-order.component';

const routes: Routes = [{ path: '', component: AddPurchaseOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPurchaseOrderRoutingModule { }
