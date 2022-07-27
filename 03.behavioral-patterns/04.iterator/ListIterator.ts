import Iterator from './Iterator';
import List from './List';

class ListIterator<T> extends Iterator<T> {
  list: List<T>;

  constructor(list: List<T>) {
    super();
    this.list = list;
  }

  atFirst() {
    return this.list.head?.data || null;
  }

  dequeue() {
    return this.list.getHead();
  }
}

export default ListIterator;
