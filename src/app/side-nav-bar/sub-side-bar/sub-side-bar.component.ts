import { Component, Input, OnInit } from '@angular/core';
import { TCG } from 'src/app/tcg/tcg';
import { TCGService } from '../../tcg/tcg.service';
import { Product } from '../../product-list/product';
import { products } from '../../product-list/products';


import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'sub-side-bar',
  templateUrl: './sub-side-bar.component.html',
  styleUrls: ['./sub-side-bar.component.css']
})
export class SubSideBarComponent {
  @Input() tcg: TCG;
  products = products;
  selectedProduct?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tcgService: TCGService,
    private location: Location
  ) {
    router.events.subscribe((val) => {
      // console.log(this.tcg);
    });
  }

  ngOnInit(): void {
    console.log(this.tcg);
  }

  getTCG(): void {
    const shortName = this.route.snapshot.paramMap.get('shortName');
    this.tcgService.getTCG(shortName)
      .subscribe(tcg => this.tcg ? this.tcg = tcg : "");
  }

  share() {
    window.alert('The product has been shared!');
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
    this.getTCG();
    console.log(this.selectedProduct.name + " has been selected");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/