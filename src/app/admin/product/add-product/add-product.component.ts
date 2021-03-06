import { Component, OnInit, EventEmitter, Output , Input} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

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
