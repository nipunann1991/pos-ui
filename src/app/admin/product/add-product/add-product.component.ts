import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Output()
  closeClicked: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }
  

  ngOnInit(): void {
  }

  close(){
    this.closeClicked.emit(true);
  }

}
