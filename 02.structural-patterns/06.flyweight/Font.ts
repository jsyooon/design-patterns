export type FontType = 'NanumGothic' | 'NanumSquare' | 'NotoSansKR';

class Font {
  fontFamily: FontType;

  size: number;

  color: string;

  constructor(fontFamly: FontType, size: number, color: string) {
    this.fontFamily = fontFamly;
    this.color = color;
    this.size = size;
  }
}

export default Font;
