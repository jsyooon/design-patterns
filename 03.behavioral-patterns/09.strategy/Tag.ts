import SearchStrategy from './SearchStrategy';

class Tag extends SearchStrategy {
  constructor() {
    super();
    this.fetchUrl = '/search/tag';
  }

  drawDom() {
    console.log('태그 검색 모드로 검색하였습니다.');
    console.log('태그를 노출합니다.');
  }
}

export default Tag;
