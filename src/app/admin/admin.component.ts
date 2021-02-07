import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isShopView: boolean = false;
  animateView: string =  "";

  constructor(public router: Router) { 

    this.router.events.subscribe((val) => { 
      this.animateView = ""; //animated fadeIn
      (this.router.url.includes("shop") || this.router.url.includes("sales-view"))? this.isShopView = true:  this.isShopView = false;
      setTimeout(() => { this.animateView = "" }, 1000);
    })

  }

  ngOnInit(): void {
    
     
  }

  
}
