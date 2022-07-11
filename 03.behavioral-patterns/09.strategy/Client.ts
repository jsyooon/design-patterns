import SearchButton from './SearchButton';
import Title from './Title';
import Tag from './Tag';
import All from './All';
import Image from './Image';

class Client {
  searchButton: SearchButton;

  constructor() {
    this.searchButton = new SearchButton();

    // 전체 검색 모드
    this.searchButton.setMode(new All());
    this.searchButton.search();

    // 타이틀 검색 모드
    this.searchButton.setMode(new Title());
    this.searchButton.search();

    // 태그 검색 모드
    this.searchButton.setMode(new Tag());
    this.searchButton.search();

    // 이미지 검색 모드
    this.searchButton.setMode(new Image());
    this.searchButton.search();
  }
}

export default Client;
