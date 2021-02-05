import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent } from "../common/confirm-dialog-box/confirm-dialog-box.component";
import { ViewsDialogBoxComponent } from "../common/views-dialog-box/views-dialog-box.component";


@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
 
  ngOnInit(): void {
     
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ViewsDialogBoxComponent, {
      width: '800px',
      data: {view_id: 5, isEditPage: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  } 


  openEditDialog(): void {
    const dialogRef = this.dialog.open(ViewsDialogBoxComponent, {
      width: '800px',
      data: {view_id: 5, isEditPage: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  } 


  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      width: '400px',
      data: {view_id: 5, title: "Delete Purchase Order", message: "Are you sure you want to delete this?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ');
      console.log(result)
      
    });
  } 

}
