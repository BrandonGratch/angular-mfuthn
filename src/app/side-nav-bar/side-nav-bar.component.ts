import { Component } from '@angular/core';
import { tcgs } from '../tcgs';
import { products } from '../products';
import { TCG } from '../tcg/tcg';
// import '@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {
    tcgs = tcgs;
    products = products;
    selectedTCG?: TCG;
  
    share() {
      window.alert('The product has been shared!');
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