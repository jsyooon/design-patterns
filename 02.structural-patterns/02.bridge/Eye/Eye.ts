abstract class Eye {
  #color: string;

  constructor(style: string) {
    this.#color = style;
  }

  get style() {
    return this.#color;
  }
}

export default Eye;
