import { Component } from '@angular/core';
import { tcgs } from '../tcgs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {
    tcgs = tcgs;
  
    share() {
      window.alert('The product has been shared!');
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/