import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewquoteComponent } from './newquote.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewquoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
     FormsModule
  ]
})
export class NewquoteModule { }
