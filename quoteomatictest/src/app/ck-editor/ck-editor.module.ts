import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkEditorComponent } from './ck-editor.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CkEditorComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class CkEditorModule { }
