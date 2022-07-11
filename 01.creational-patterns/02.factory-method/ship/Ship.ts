abstract class Ship {
  #name = '';
  #logo = '';

  constructor(name: string) {
    this.name = name;
  }

  get name() {
    return this.#name;
  }

  get logo() {
    return this.#logo;
  }

  set name(name: string) {
    this.#name = name;
  }

  set logo(logo: string) {
    this.#logo = logo;
  }
}

export default Ship;
