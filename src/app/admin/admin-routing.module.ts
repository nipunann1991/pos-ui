import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { 
    path: '', component: AdminComponent, children:[
      { path: 'dashboard', loadChildren: () => import('../admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'shop', loadChildren: () => import('../admin/shop/shop.module').then(m => m.ShopModule) },  
      { path: 'product', loadChildren: () => import('../admin/product/product.module').then(m => m.ProductModule) },
      { path: 'contact', loadChildren: () => import('../admin/contact/contact.module').then(m => m.ContactModule) },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
