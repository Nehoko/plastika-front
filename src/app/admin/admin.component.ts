import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsComponent} from '../subcomponents/products/products.component';
import {UsersComponent} from '../subcomponents/users/users.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  selectedBarItem: string;
  barItems: string[];
  isProductsSelected: boolean;
  isUsersSelected: boolean;

  ngOnInit() {
    this.barItems = [
      'Список товаров',
      'Список пользователей',
    ];
    this.isProductsSelected = true;
    this.isUsersSelected = false;
    this.selectedBarItem = this.barItems[0];
    // this.http.get('api/products.json').subscribe((data: Product[]) => this.products = data);
  }

  chooseBarItem(barItem: string) {
    this.selectedBarItem = barItem;
    if (this.selectedBarItem === this.barItems[0]) {
      this.isProductsSelected = true;
      this.isUsersSelected = false;
    }
    if (this.selectedBarItem === this.barItems[1]) {
      this.isProductsSelected = false;
      this.isUsersSelected = true;
    }
  }
}
