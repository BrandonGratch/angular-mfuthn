import { Component, OnInit } from '@angular/core';
import { sets } from '../sets';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  sets : any = [];
  items = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.items = sets;
  }

  foo() {
    this.sets = this.http.get("https://api.magicthegathering.io/v1/sets");
    this.http.get("https://api.magicthegathering.io/v1/sets").subscribe(val => console.log(val));
  }
}
