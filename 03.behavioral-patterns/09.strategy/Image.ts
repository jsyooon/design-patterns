import SearchStrategy from './SearchStrategy';

class Image extends SearchStrategy {
  constructor() {
    super();
    this.fetchUrl = '/search/image';
  }

  drawDom() {
    console.log('이미지 검색 모드로 검색하였습니다.');
    console.log('이미지를 노출합니다.');
  }
}

export default Image;
