import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncementComponent } from './announcement.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule.forChild([
            {path: '', component: AnnouncementComponent}
          ]),
FormsModule,
ReactiveFormsModule
],
  declarations: [
  ]
  
})
export class AnnouncementModule { }