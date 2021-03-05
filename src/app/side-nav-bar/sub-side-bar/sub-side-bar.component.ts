import { Component } from '@angular/core';
import { Product } from '../../tcg/product';
import { products } from '../../products';

@Component({
  selector: 'sub-side-bar',
  templateUrl: './sub-side-bar.component.html',
  styleUrls: ['./sub-side-bar.component.css']
})
export class SubSideBarComponent {
    products = products;
    selectedProduct?: Product;
  
    share() {
      window.alert('The product has been shared!');
    }
    
    onSelect(product: Product) {
      this.selectedProduct = product;
      console.log(this.selectedProduct.name + "has been selected");
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/