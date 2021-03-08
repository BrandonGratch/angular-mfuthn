import { Component, OnInit } from '@angular/core';
import { sets } from '../sets';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit(): void {
    this.items = sets;
  }

}
