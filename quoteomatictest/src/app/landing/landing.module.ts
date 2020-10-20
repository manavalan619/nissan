import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule.forChild([
            {path: '', component: LandingComponent}
          ]),
FormsModule,
ReactiveFormsModule
],
  declarations: [
  LandingComponent
]
  
})
export class LandingModule { }