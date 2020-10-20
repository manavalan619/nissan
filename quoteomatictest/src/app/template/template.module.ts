import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { templateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: templateComponent }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    templateComponent
  ]

})
// tslint:disable-next-line:class-name
export class templateModule { }
