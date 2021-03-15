import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TCGComponent } from './tcg/tcg.component';
import { TCGDetailComponent } from './tcg/tcg-details/tcg-detail.component';
import { TCGRoutingModule } from './tcg/tcg.module';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { ItemTableComponent } from './item-table/item-table.component';

//import { TCGDetailComponent } from './tcg-detail/tcg-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'admin', component: ItemTableComponent },
  { path: '', component: TCGComponent },
  { path: ':shortName', component: TCGDetailComponent, children: [{ path: ':shortName', component: ProductDetailsComponent}] },
  { path: 'TCGs', component: TCGComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), TCGRoutingModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}