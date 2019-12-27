import {Component, OnInit} from '@angular/core';
import {User} from '../../core/classes/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users: User[];

  ngOnInit() {
    this.users = [
      new User('Nehoko', 'https://plastika.org/api/pic/user/nehoko', 'active'),
      new User('Dorit', 'https://plastika.org/api/pic/user/dorit', 'active'),
      new User('SexyDrone', 'https://plastika.org/api/pic/user/sexyDrone', 'banned'),
    ];
  }

  selectLineItems(lineNumber: number) {
    return this.users.slice(lineNumber * 3, lineNumber * 3 + 3);
  }

  scoreCountOfLines(array: User[]) {
    const plusOne = array.length % 3 > 0 ? 1 : 0;
    return array.slice(0, array.length / 3 + plusOne);
  }
}
