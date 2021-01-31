import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';  
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http'; 
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { DialogBoxComponent } from './admin/common/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
   
  ],
  imports: [ 
      FormsModule,
      ReactiveFormsModule, 
      HttpClientModule,   
      MatButtonModule, 
      MatSlideToggleModule, 
      MatExpansionModule,
      MatTabsModule,
      MatSliderModule,
      MatIconModule,
      DragDropModule, 
      MatCheckboxModule, 
      MatNativeDateModule, 
      MatMenuModule,
      MatDialogModule, 
      MatFormFieldModule, 
      MatDatepickerModule,  
      MatRadioModule, 
      MatTableModule,
      MatInputModule
    ],
  exports: [  
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,   
    MatButtonModule, 
    MatSlideToggleModule, 
    MatExpansionModule,
    MatTabsModule,
    MatSliderModule,
    MatIconModule,
    DragDropModule, 
    MatCheckboxModule, 
    MatNativeDateModule, 
    MatMenuModule,
    MatDialogModule, 
    MatFormFieldModule, 
    MatDatepickerModule,  
    MatRadioModule, 
    MatTableModule,
    MatInputModule
  ],
  
})
export class AppSharedModule {}
