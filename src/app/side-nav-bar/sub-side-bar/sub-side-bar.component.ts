import { Component, Input, OnInit } from '@angular/core';
import { TCG } from 'src/app/tcg/tcg';
import { TCGService } from '../../tcg/tcg.service';
import { Product } from '../../product-list/product';
import { products } from '../../product-list/products';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'sub-side-bar',
  templateUrl: './sub-side-bar.component.html',
  styleUrls: ['./sub-side-bar.component.css']
})
export class SubSideBarComponent {
    @Input() tcg : TCG;
    products = products;
    selectedProduct?: Product;
  
    constructor(
      private route: ActivatedRoute,
      private tcgService: TCGService,
      private location: Location
    ) {}
  
    ngOnInit(): void {
      console.log(this.tcg);
    }
  
    getTCG(): void {
      const shortName = this.route.snapshot.paramMap.get('shortName');
      //console.log(this.route);
      //console.log(shortName);
      this.tcgService.getTCG(shortName)
        .subscribe(tcg => this.tcg = tcg);
    }
  


    share() {
      window.alert('The product has been shared!');
    }
    
    onSelect(product: Product) {
      this.selectedProduct = product;
      this.getTCG();
      console.log(this.selectedProduct.name + " has been selected");
    }

    getProdURL(tcg : TCG, product : Product) {
      console.log(product);
      // TO-DO fix errors etc
      return (tcg.shortName + "/" + product.shortName);
    }
    
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/