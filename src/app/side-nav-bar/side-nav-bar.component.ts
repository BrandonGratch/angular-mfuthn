import { Component, OnInit } from '@angular/core';
import { tcgs } from '../tcgs';
import { products } from '../product-list/products';
import { TCG } from '../tcg/tcg';
import { TCGService } from '../tcg/tcg.service';
import { FormBuilder, FormGroup } from '@angular/forms';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css'],
})
export class SideNavBarComponent {
    tcgs = tcgs;
    products = products;
    tcg : TCG;
    selectedTCG?: TCG;
    events: string[] = [];
    opened: boolean = true;
  
    options = {
        bottom: 0,
        fixed: false,
        top: 0
      };

      constructor(
        private route: ActivatedRoute,
        private tcgService: TCGService,
        private location: Location
      ) {}

    share() {
      window.alert('The product has been shared!');
    }

    getTCG(): void {
      const shortName = this.route.snapshot.paramMap.get('shortName');
      console.log(shortName + " from side nav");
      this.tcgService.getTCG(shortName)
        .subscribe(tcg => this.selectedTCG = tcg);
    }
    
    onSelect(tcg: TCG) {
      this.selectedTCG = tcg;
      console.log(this.selectedTCG.name + "has been selected");
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/