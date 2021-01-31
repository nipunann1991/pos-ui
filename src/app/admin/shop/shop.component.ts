import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewsDialogBoxComponent } from "../common/views-dialog-box/views-dialog-box.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  shopList = [
    {id: 0, shop_name: "Shop #1", image_url: "/assets/images/shops.png", shop_url: "/admin/dashboard" },
    {id: 1, shop_name: "Shop #2", image_url: "/assets/images/shops.png", shop_url: "/admin/dashboard" }
  ]

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ViewsDialogBoxComponent, {
      width: '800px',
      data: {view_id: 2}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  } 

}
