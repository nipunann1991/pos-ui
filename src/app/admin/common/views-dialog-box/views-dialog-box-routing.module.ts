import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsDialogBoxComponent } from './views-dialog-box.component';

const routes: Routes = [{ path: '', component: ViewsDialogBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsDialogBoxRoutingModule { }
