import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule.forChild([
            {path: '', component: ProductsComponent}
          ]),
FormsModule,
ReactiveFormsModule
],
  declarations: [
  ProductsComponent
]
  
})
export class ProductsModule { }