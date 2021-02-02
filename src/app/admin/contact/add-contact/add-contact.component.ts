import { Component, OnInit, EventEmitter, Output , Input} from '@angular/core';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

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
