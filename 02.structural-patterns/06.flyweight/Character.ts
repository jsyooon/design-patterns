import FontFactory from './FontFactory';
import Font, { type FontType } from './Font';

class Character {
  private value: string;

  private font: Font;

  constructor(value: string, fontFamily: FontType, size: number, color: string) {
    this.value = value;
    this.font = FontFactory.getFont(fontFamily, size, color);
  }
}

export default Character;
