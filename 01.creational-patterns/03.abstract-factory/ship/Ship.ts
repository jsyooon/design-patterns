import Anchor from '../parts/Anchor';
import Wheel from '../parts/Wheel';

abstract class Ship {
  _name = '';
  _logo = '';
  _anchor: Anchor;
  _wheel: Wheel;

  constructor(name: string) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  get logo() {
    return this._logo;
  }

  set name(name: string) {
    this._name = name;
  }

  set logo(logo: string) {
    this._logo = logo;
  }

  set anchor(anchor: Anchor) {
    this._anchor = anchor;
  }

  set wheel(wheel: Wheel) {
    this._wheel = wheel;
  }

  get anchor() {
    return this._anchor;
  }

  get wheel() {
    return this._wheel;
  }
}

export default Ship;
