class Anchor {
  _name: string;
  _color: string;

  constructor() {
    this._name = 'anchor';
    this._color = '';
  }

  set color(color: string) {
    this._color = color;
  }

  get name() {
    return this._name;
  }
}

export default Anchor;
