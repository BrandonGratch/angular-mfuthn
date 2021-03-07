import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TCGComponent } from './tcg/tcg.component';
import { TCGDetailComponent } from './tcg/tcg-details/tcg-detail.component';

//import { TCGDetailComponent } from './tcg-detail/tcg-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: TCGComponent },
  { path: 'TCGs/:shortName', component: TCGDetailComponent },
  { path: 'TCGs', component: TCGComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}