import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteTypeComponent } from './create-quote-type.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { QuoteTypeEntityComponent } from './quote-type-entity/quote-type-entity.component';



@NgModule({
  declarations: [
    CreateQuoteTypeComponent,
    QuoteTypeEntityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule
  ]
})
export class CreateQuoteTypeModule { }
