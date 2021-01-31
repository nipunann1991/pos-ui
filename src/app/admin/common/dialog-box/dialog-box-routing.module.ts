import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogBoxComponent } from './dialog-box.component';

const routes: Routes = [{ path: '', component: DialogBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogBoxRoutingModule { }
