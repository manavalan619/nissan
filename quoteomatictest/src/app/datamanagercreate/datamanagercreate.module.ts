import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatamanagercreateComponent } from './datamanagercreate.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule
],
  declarations: [
  DatamanagercreateComponent
]
})
export class DatamanagercreateModule { }
