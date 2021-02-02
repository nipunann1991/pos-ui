import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'admin/product/add-product', loadChildren: () => import('./admin/product/add-product/add-product.module').then(m => m.AddProductModule) },
  { path: 'admin/common/views-dialog-box', loadChildren: () => import('./admin/common/views-dialog-box/views-dialog-box.module').then(m => m.ViewsDialogBoxModule) },
  // { path: 'admin/shop/add-shop', loadChildren: () => import('./admin/shop/add-shop/add-shop.module').then(m => m.AddShopModule) },
  { path: 'admin/common/confirm-dialog-box', loadChildren: () => import('./admin/common/confirm-dialog-box/confirm-dialog-box.module').then(m => m.ConfirmDialogBoxModule) },
  //{ path: 'admin/contact/add-contact', loadChildren: () => import('./admin/contact/add-contact/add-contact.module').then(m => m.AddContactModule) },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
