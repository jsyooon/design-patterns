abstract class FileSystem {
  #name: string;
  #createdAt: Date;

  constructor(name: string) {
    this.#name = name;
    this.#createdAt = new Date();
  }

  set name(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get createdAt() {
    return this.#createdAt;
  }

  abstract get size(): number;
}

export default FileSystem;
