abstract class Hair {
  #style: string;

  constructor(style: string) {
    this.#style = style;
  }

  get style() {
    return this.#style;
  }
}

export default Hair;
