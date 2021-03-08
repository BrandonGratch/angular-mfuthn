import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TCGComponent } from './tcg.component';
//import { TCGListComponent } from './tcg-list.component';
//import { TCGDetailsComponent } from './tcg-details.component';

import { ProductDetailsComponent } from '../product-list/product-details/product-details.component';

const productRoutes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TCGRoutingModule { }