import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TCGComponent } from './tcg.component';
//import { TCGListComponent } from './tcg-list.component';
//import { TCGDetailsComponent } from './tcg-details.component';

const productRoutes: Routes = [
  { path: ':shortName', component: TCGComponent }
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