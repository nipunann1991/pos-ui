import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  productList = [
    {id: 0, title: "Product", icon:"icon-shopping-bag", url: "/admin/product"},
    {id: 1, title: "Contact", icon:"icon-phone-call", url: "/admin/contact"},
    {id: 2, title: "Purchase Order", icon:"icon-result", url: "/admin/purchase-order"},
    {id: 3, title: "Sell", icon:"icon-cart", url: ""},
    {id: 4, title: "Invoice", icon:"icon-invoice", url: "/admin/invoice"},
    {id: 5, title: "Reports", icon:"icon-business-and-finance-1", url: "/admin/reports"},
    {id: 5, title: "Settings", icon:"icon-settings", url: "/admin/users"},
  ]

  ngOnInit(): void {

  }

}
