import SearchStrategy from './SearchStrategy';

class All extends SearchStrategy {
  constructor() {
    super();
    this.fetchUrl = '/search/all';
  }

  drawDom() {
    console.log('전체 검색 모드로 검색하였습니다.');
    console.log('모든 정보를 노출합니다.');
  }
}

export default All;
