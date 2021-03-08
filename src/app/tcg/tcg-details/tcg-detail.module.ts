import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../../product-list/product-details/product-details.component';

//import { TCGComponent } from './tcg.component';
//import { TCGListComponent } from './tcg-list.component';
//import { TCGDetailsComponent } from './tcg-details.component';

const productRoutes: Routes = [
  { path: ':shortName', component: ProductDetailsComponent }
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

//TO-DO TCG > PRODUCT ROUTING