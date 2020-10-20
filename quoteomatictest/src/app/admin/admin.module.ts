import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { I18NextModule } from 'angular-i18next';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastrModule,
    I18NextModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [
    AdminComponent
  ]

})
export class AdminModule { }
