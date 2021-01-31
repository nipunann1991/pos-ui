import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'admin/product/add-product', loadChildren: () => import('./admin/product/add-product/add-product.module').then(m => m.AddProductModule) },
  { path: 'admin/common/views-dialog-box', loadChildren: () => import('./admin/common/views-dialog-box/views-dialog-box.module').then(m => m.ViewsDialogBoxModule) },
  { path: 'admin/shop/add-shop', loadChildren: () => import('./admin/shop/add-shop/add-shop.module').then(m => m.AddShopModule) },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
