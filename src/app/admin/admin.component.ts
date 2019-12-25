import {Component, OnInit} from '@angular/core';
import {Product} from '../core/classes/product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selectedBarItem: string;
  barItems: string[];
  products: Product[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.selectedBarItem = 'Список товаров';
    this.barItems = [
      'Список товаров',
      'Список пользователей',
    ];
    // this.http.get('api/products.json').subscribe((data: Product[]) => this.products = data);
  }

  chooseBarItem(barItem: string) {
    this.selectedBarItem = barItem;
  }
}
