import WaitAggregate from './WaitAggregate';
import WaitingInterface from './WaitingInterface';
import HashTable from './HashTable';
import HashTableIterator from './HashTableIterator';

class WaitHashTable extends WaitAggregate {
  waitingHashTable: HashTable<WaitingInterface>;

  constructor() {
    super();
    this.waitingHashTable = new HashTable();
  }

  getIterator() {
    if (!this.iterator) this.iterator = new HashTableIterator(this.waitingHashTable);
    return super.iterator;
  }
}

export default WaitHashTable;
