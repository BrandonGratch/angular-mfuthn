import { Component, OnInit, Input } from '@angular/core';

import { products } from '../product-list/products';
import { tcgs } from '../tcgs';

import { TCG } from './tcg';
import { TCGService } from './tcg.service';
import { MessageService } from '../message/message.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tcg',
  templateUrl: './tcg.component.html',
  styleUrls: ['./tcg.component.css']
})
export class TCGComponent implements OnInit {
  selectedTCG?: TCG;
  tcg: TCG;
  tcgs: TCG[] = [];

  constructor(private tcgService: TCGService, private messageService: MessageService) { }

  ngOnInit() {
    this.getTCGs();
  }

  onSelect(tcg: TCG): void {
    this.selectedTCG = tcg;
    this.messageService.add(`TCGComponent: Selected TCG id=${tcg.shortName}`);
  }

  getTCGs(): void {
    this.tcgService.getTCGs()
        .subscribe(tcgs => this.tcgs = tcgs);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/