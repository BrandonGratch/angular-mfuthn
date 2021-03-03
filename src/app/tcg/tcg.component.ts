import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-tcg',
  templateUrl: './tcg.component.html',
  styleUrls: ['./tcg.component.css']
})
export class TCGComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/