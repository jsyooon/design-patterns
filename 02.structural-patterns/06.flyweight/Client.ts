import Character from './Character';

class Client {
  strings: Array<Character> = [];

  constructor() {
    this.strings = [
      new Character('안', 'NotoSansKR', 18, '#000'),
      new Character('녕', 'NotoSansKR', 18, '#000'),
      new Character('하', 'NotoSansKR', 18, '#000'),
      new Character('세', 'NotoSansKR', 18, '#000'),
      new Character('요', 'NotoSansKR', 18, '#000'),
      new Character('!', 'NanumSquare', 18, '#fff000'),
    ];
  }
}
