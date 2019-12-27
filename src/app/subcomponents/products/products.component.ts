import {Component, OnInit} from '@angular/core';
import {Product} from '../../core/classes/product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {
  }

  products: Product[];

  ngOnInit() {
    this.products = [
      new Product('Олень', 1200, 'https://plastika.org/api/pic/product/deer'),
      new Product('Подставка для телефона', 300, 'https://plastika.org/api/pic/product/phoneHolder'),
      new Product('Пирамида', 450, 'https://plastika.org/api/pic/product/pyramide'),
      new Product('Закладка для книги', 100, 'https://plastika.org/api/pic/product/bookmark'),
      new Product('Подставка для наушников', 1200, 'https://plastika.org/api/pic/product/headphoneHolder'),
      new Product('Сова', 350, 'https://plastika.org/api/pic/product/owl'),
    ];
  }

  selectLineItems(lineNumber: number) {
    return this.products.slice(lineNumber * 3, lineNumber * 3 + 3);
  }

  scoreCountOfLines(array: Product[]) {
    const plusOne = array.length % 3 > 0 ? 1 : 0;
    return array.slice(0, array.length / 3 + plusOne);
  }
}
