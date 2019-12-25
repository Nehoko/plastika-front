export class User {
  login: string;
  pic: string;
  status: string;

  constructor(login: string, pic: string, status: string ) {
    this.login = login;
    this.pic = pic;
    this.status = status;
  }
}
