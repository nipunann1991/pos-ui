import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  isAllRecords: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  allRecords(e: any){
    this.isAllRecords = e.checked;
  }

}
