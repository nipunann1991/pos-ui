import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-views-dialog-box',
  templateUrl: './views-dialog-box.component.html',
  styleUrls: ['./views-dialog-box.component.scss']
})
export class ViewsDialogBoxComponent implements OnInit {

  viewId: number

  constructor(
    public dialogRef: MatDialogRef<ViewsDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.viewId = data.view_id
    }


  ngOnInit(): void {
    
  }
 
  closeDialog(isClosed: Boolean){
    (isClosed)?  this.dialogRef.close() : '';
   
  }

}
