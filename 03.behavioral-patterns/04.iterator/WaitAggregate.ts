import Iterator from './Iterator';
import WaitingInterface from './WaitingInterface';

abstract class WaitAggregate {
  iterator: Iterator<WaitingInterface>;

  getIterator() {
    return this.iterator;
  }
}

export default WaitAggregate;
