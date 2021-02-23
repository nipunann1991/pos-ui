import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceComponent } from './invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceComponent },
  { path: 'view-invoice', loadChildren: () => import('./view-invoice/view-invoice.module').then(m => m.ViewInvoiceModule) }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
