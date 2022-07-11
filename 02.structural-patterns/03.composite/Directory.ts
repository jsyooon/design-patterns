import FileSystem from './FileSystem';

class Directory extends FileSystem {
  #childern: Array<FileSystem>;

  get size() {
    return this.#childern.reduce((acc, value) => acc + value.size, 0);
  }

  public add(children: FileSystem) {
    this.#childern.push(children);
  }
}

export default Directory;
