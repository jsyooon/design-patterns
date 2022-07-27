interface HashTableType<T> {
  [key: string]: T;
}

class HashTable<T> {
  hashTable: HashTableType<T>;

  front: number;

  rear: number;

  constructor() {
    this.hashTable = {};
    this.front = this.rear = 0;
  }

  add(data: T) {
    if (this.rear) this.rear++;
    this.hashTable[this.rear.toString()] = data;
  }

  getFirstItem() {
    const temp = this.hashTable[this.front.toString()];
    if (temp) this.front++;
    delete this.hashTable[this.front.toString()];
    return temp;
  }
}

export default HashTable;
