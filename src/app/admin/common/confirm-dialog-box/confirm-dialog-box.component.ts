import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-box',
  templateUrl: './confirm-dialog-box.component.html',
  styleUrls: ['../views-dialog-box/views-dialog-box.component.scss']
})
export class ConfirmDialogBoxComponent implements OnInit {

  popupData: any; 

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogBoxComponent) {
      this.popupData = data;  
    }


  ngOnInit(): void {
    
  }
 
  onConfirm(): void { 
    this.dialogRef.close(true);
  }

  onDismiss(): void { 
    this.dialogRef.close(false);
  }

}
