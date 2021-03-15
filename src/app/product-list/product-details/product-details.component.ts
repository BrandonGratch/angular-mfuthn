import { Component, OnInit } from '@angular/core';
import { sets } from '../sets';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  sets : any = [];
  items = [];
  setTypes = ['expansion', 'core', 'masters'];
  itemType = "Booster Boxes"

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {

    router.events.subscribe((val) => {
      this.foo();
    });
  }

  ngOnInit(): void {
    this.foo();
    
  }

  foo() {
    this.sets = this.http.get("https://api.magicthegathering.io/v1/sets");
    this.http.get("https://api.magicthegathering.io/v1/sets").subscribe(val => this.setValue(val));
  }

  setValue(x : any){ 
    this.sets = this.pruneAndSort(x.sets);
    this.items = this.sets.slice(0, 24);
    console.log(this.items);
    //console.log(x);
    //console.log(this.sets);
  }

  pruneAndSort(arr : any[]) {
    var sortedArr : any = [];

    for (var i = 0; i < arr.length; i++) {
      if (this.setTypes.includes(arr[i].type) && !arr[i].onlineOnly) {
        sortedArr.push(arr[i]);
      }
    }
    
    return sortedArr.sort((a : any, b : any) => parseInt(b.releaseDate.replace('-', '')) - parseInt(a.releaseDate.replace('-', '')));
  }

  getImgPath(item : any) {
    return "assets/images/" + item.code + ".png";
  }

  getProductTitle (item : any) {
    return item.name + " " + this.itemType;
  }
}
