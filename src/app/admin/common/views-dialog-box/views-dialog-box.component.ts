import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-views-dialog-box',
  templateUrl: './views-dialog-box.component.html',
  styleUrls: ['./views-dialog-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewsDialogBoxComponent implements OnInit {

  viewId: number;
  isEditPage: boolean = false;
  pageData: any = {}

  constructor(
    public dialogRef: MatDialogRef<ViewsDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.viewId = data.view_id  
      this.pageData = {  isEditPage: data.isEditPage, pageTypeTitle: data.isEditPage? "Edit" : "Add" }

    }


  ngOnInit(): void {
    
  }
 
  closeDialog(isClosed: any){
    (isClosed)?  this.dialogRef.close() : '';
   
  }

}
