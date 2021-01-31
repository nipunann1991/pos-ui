import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBoxComponent } from "../common/dialog-box/dialog-box.component";
import { ViewsDialogBoxComponent } from "../common/views-dialog-box/views-dialog-box.component";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  

  constructor(public dialog: MatDialog) { }
 
  ngOnInit(): void {
     
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ViewsDialogBoxComponent, {
      width: '800px',
      data: {view_id: 1}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  } 

}

 
