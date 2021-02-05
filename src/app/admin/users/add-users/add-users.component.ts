import { Component, OnInit, EventEmitter, Output , Input} from '@angular/core';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

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
