import WaitAggregate from './WaitAggregate';
import ListIterator from './ListIterator';
import WaitingInterface from './WaitingInterface';
import List from './List';

class WaitList extends WaitAggregate {
  waitingList: List<WaitingInterface>;

  constructor() {
    super();
    this.waitingList = new List();
  }

  getIterator() {
    if (!this.iterator) this.iterator = new ListIterator(this.waitingList);
    return super.iterator;
  }
}

export default WaitList;
