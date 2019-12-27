import {Component, OnInit} from '@angular/core';
import {Product} from '../core/classes/product/product';
import {HttpClient} from '@angular/common/http';
import {User} from '../core/classes/user/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  selectedBarItem: string;
  selectedArray: object[];
  barItems: string[];
  products: Product[];
  users: User[];
  countOfLines: number;

  ngOnInit() {
    this.selectedBarItem = 'Список товаров';
    this.barItems = [
      'Список товаров',
      'Список пользователей',
    ];
    this.products = [
      new Product('Олень', 1200, 'https://plastika.org/api/pic/product/deer'),
      new Product('Подставка для телефона', 300, 'https://plastika.org/api/pic/product/phoneHolder'),
      new Product('Пирамида', 450, 'https://plastika.org/api/pic/product/pyramide'),
      new Product('Закладка для книги', 100, 'https://plastika.org/api/pic/product/bookmark'),
      new Product('Подставка для наушников', 1200, 'https://plastika.org/api/pic/product/headphoneHolder'),
      new Product('Сова', 350, 'https://plastika.org/api/pic/product/owl'),
    ];
    this.users = [
      new User('Nehoko', 'https://plastika.org/api/pic/user/nehoko', 'active'),
      new User('Dorit', 'https://plastika.org/api/pic/user/dorit', 'active'),
      new User('SexyDrone', 'https://plastika.org/api/pic/user/sexyDrone', 'banned'),
    ];
    const plusOne = this.products.length % 3 > 0 ? 1 : 0;
    this.countOfLines = this.products.length / 3 + plusOne;
    this.selectedArray = this.products;
    // this.http.get('api/products.json').subscribe((data: Product[]) => this.products = data);
  }

  chooseBarItem(barItem: string) {
    this.selectedBarItem = barItem;

    switch (barItem) {
      case this.barItems[0]:
        this.selectedArray = this.products;
        break;
      case this.barItems[1]:
        this.selectedArray = this.users;
        break;
    }
  }

  selectLineItems(lineNumber: number) {
    switch (this.selectedBarItem) {
      case this.barItems[0]:
        return this.products.slice(lineNumber * 3, lineNumber * 3 + 2);
        break;
      case this.barItems[1]:
        return this.users.slice(lineNumber * 3, lineNumber * 3 + 2);
    }
  }

  scoreCountOfLines(array: object[]) {
    const plusOne = array.length % 3 > 0 ? 1 : 0;
    return array.slice(0, array.length / 3 + plusOne);
  }
}
