import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule.forChild([
            {path: '', component: ServicesComponent}
          ]),
FormsModule,
ReactiveFormsModule,
],
  declarations: [
  ServicesComponent
]
  
})
export class ServicesModule { }