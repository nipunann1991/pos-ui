import { Component, OnInit, EventEmitter, Output , Input} from '@angular/core';


@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.scss']
})
export class AddPurchaseOrderComponent implements OnInit {

  @Output()
  closeClicked: EventEmitter<Boolean> = new EventEmitter<Boolean>();
 
  @Input() pageData: any = {};
   

  constructor() { }
  

  ngOnInit(): void {
    console.log(this.pageData);
  }

  close(){
    this.closeClicked.emit(true);
  }

}
