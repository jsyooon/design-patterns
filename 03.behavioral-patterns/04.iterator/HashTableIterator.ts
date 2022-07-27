import HashTable from './HashTable';
import Iterator from './Iterator';

class HashTableIterator<T> extends Iterator<T> {
  hashTable: HashTable<T>;

  constructor(hashTable: HashTable<T>) {
    super();
    this.hashTable = hashTable;
  }

  atFirst() {
    return this.hashTable[this.hashTable.front];
  }

  dequeue() {
    return this.hashTable.getFirstItem();
  }
}

export default HashTableIterator;
