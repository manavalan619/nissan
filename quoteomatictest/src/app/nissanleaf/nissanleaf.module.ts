import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NissanLeafComponent } from './nissanleaf.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule.forChild([
            {path: '', component: NissanLeafComponent}
          ]),
FormsModule,
ReactiveFormsModule
],
  declarations: [
  NissanLeafComponent
]
  
})
export class NissanLeafModule { }