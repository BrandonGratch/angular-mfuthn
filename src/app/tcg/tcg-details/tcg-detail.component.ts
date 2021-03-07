import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TCG } from '../tcg';
import { TCGService } from '../tcg.service';

@Component({
  selector: 'app-tcg-detail',
  templateUrl: './tcg-detail.component.html',
  styleUrls: [ './tcg-detail.component.css' ]
})
export class TCGDetailComponent implements OnInit {
  tcg: TCG;

  constructor(
    private route: ActivatedRoute,
    private tcgService: TCGService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTCG();
  }

  getTCG(): void {
    const shortName = this.route.snapshot.paramMap.get('shortName');
    console.log(shortName);
    this.tcgService.getTCG(shortName)
      .subscribe(tcg => this.tcg = tcg);
  }

  goBack(): void {
    this.location.back();
  }
}