import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableModule } from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', price: 50 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', price: 500  },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', price: 50  },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', price: 50  },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', price: 50  },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', price: 50  },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', price: 50  },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', price: 50  },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', price: 50  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', price: 50  },
];



@Component({
  selector: 'admin',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'price'];
  dataSource = ELEMENT_DATA;
  @Input() price : number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {

    router.events.subscribe((val) => {
      // see also 
      //console.log(val instanceof NavigationEnd) 

    });
  }

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }
}