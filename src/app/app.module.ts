import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { TCGRoutingModule } from './tcg/tcg.module';
import { ProductRoutingModule } from './product-list/product-routing.module';
// TO-DO make mat module
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SubSideBarComponent } from './side-nav-bar/sub-side-bar/sub-side-bar.component';

import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TCGComponent } from './tcg/tcg.component';
import { TCGDetailComponent } from './tcg/tcg-details/tcg-detail.component';
import { MessagesComponent } from './message/messages.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TCGRoutingModule,
    ProductRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }
      //{ path: 'crisis-center', component: null },
      //{ path: 'heroes', component: null },
    ]),
    BrowserAnimationsModule,

    MatSidenavModule,
    MatCheckboxModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SideNavBarComponent,
    SubSideBarComponent,
    ProductListComponent,
    TCGComponent,
    TCGDetailComponent,
    ProductDetailsComponent,
    MessagesComponent

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/