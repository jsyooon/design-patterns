import SearchStrategy from './SearchStrategy';

class Title extends SearchStrategy {
  constructor() {
    super();
    this.fetchUrl = '/search/title';
  }

  drawDom() {
    console.log('제목 검색 모드로 검색하였습니다.');
    console.log('제목을 노출합니다.');
  }
}

export default Title;
