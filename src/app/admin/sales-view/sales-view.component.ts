import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent } from "../common/confirm-dialog-box/confirm-dialog-box.component";
import { OverlayScrollbarsComponent } from "overlayscrollbars-ngx";

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.scss']
})
export class SalesViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  itemsList = [
    { name: 'Chicken Fried Rice', description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", image: 'chicken-rice.jpg', price: '400.00'  },
    { name: 'Chicken Cheese Kottu', description: "Lorem ipsum dolor, sit amet conse ssd elit.", image: 'kottu.jpg', price: '500.00'  },
    { name: 'Grilled Beef Chop Rice', description: "Lorem ipsum dolor, sd conse sdfaio ags elit.", image: 'beef-rice.jpg', price: '650.00'  },
    { name: 'Vegitable Mix Rice', description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", image: null, price: '300.00'  },
  ]

  categoryList = [
    { name: 'Popular', image: null }, 
    { name: 'Dinner', image: null }, 
    { name: 'Lunch', image: null }, 
    { name: 'Breakfast', image: null }, 
    { name: 'Beverages', image: null }, 
    { name: 'Appitizer', image: null }, 
    { name: 'Snack', image: null }, 
    { name: 'Main Course', image: null }, 
    { name: 'Platters', image: null }, 
  ]

  ngOnInit(): void {
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      width: '400px',
      data: {view_id: 1, title: "Discard Invoice", message: "Are you sure you want to discard this?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ');
      console.log(result)
      
    });
  } 


  openDeleteItem(): void {
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      width: '400px',
      data: {view_id: 1, title: "Delete Product", message: "Are you sure you want to delete this?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ');
      console.log(result)
      
    });
  } 

}
