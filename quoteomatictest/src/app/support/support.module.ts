import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupportComponent } from './support.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule.forChild([
            {path: '', component: SupportComponent}
          ]),
FormsModule,
ReactiveFormsModule
],
  declarations: [
  SupportComponent
]
  
})
export class SupportModule { }