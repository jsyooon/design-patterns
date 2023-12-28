import UserBuilder from './UserBuilder';
import type User from './User';

class Client {
  userList: User[];

  userBuilder: UserBuilder;

  constructor() {
    this.userBuilder = new UserBuilder();
    this.userList = [];

    this.userList.push(
      this.userBuilder
        .id('gildong')
        .name('홍길동')
        .gender('M')
        .birthday('2003.12.25')
        .job('학생')
        .build()
    );
    this.userList.push(
      this.userBuilder
        .id('yhchoi')
        .name('최영희')
        .gender('F')
        .location('서울')
        .build()
    );
  }
}

export default Client;
