import FileSystem from './FileSystem';

class File extends FileSystem {
  #size: number;

  constructor(name: string, size: number) {
    super(name);
    this.#size = size;
  }

  get size() {
    return this.#size;
  }
}

export default File;
