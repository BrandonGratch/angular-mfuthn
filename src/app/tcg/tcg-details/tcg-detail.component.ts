import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { TCG } from '../tcg';
import { TCGService } from '../tcg.service';

@Component({
  selector: 'app-tcg-detail',
  templateUrl: './tcg-detail.component.html',
  styleUrls: ['./tcg-detail.component.css']
})
export class TCGDetailComponent implements OnInit {
  tcg: TCG;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tcgService: TCGService,
    private location: Location
  ) {

    router.events.subscribe((val) => {
      // see also 
      //console.log(val instanceof NavigationEnd) 
      this.getTCG();
    });
  }

  ngOnInit(): void {
    this.getTCG();
  }

  getTCG(): void {
    const shortName = this.route.snapshot.paramMap.get('shortName');
    console.log(shortName + " selected from reroute");
    this.tcgService.getTCG(shortName)
      .subscribe(tcg => this.tcg = tcg);
  }

  goBack(): void {
    this.location.back();
  }
}