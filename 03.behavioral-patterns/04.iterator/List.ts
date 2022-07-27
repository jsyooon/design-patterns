interface NodeType<T> {
  data: T;
  next: NodeType<T> | null;
}

class List<T> {
  rear: NodeType<T> | null;
  head: NodeType<T> | null;

  constructor() {
    this.rear = null;
    this.head = null;
  }

  add(data: T) {
    const newNodeType = this.create(data);
    if (!(this.head && this.rear)) {
      this.head = newNodeType;
    } else {
      this.rear.next = newNodeType;
    }
    this.rear = newNodeType;
  }

  getHead() {
    const tmp = this.head;
    if (!tmp) return tmp;

    if (this.head === this.rear) {
      this.head = this.rear = null;
    } else {
      this.head = this.head?.next || null;
    }

    return tmp.data;
  }

  create(data: T): NodeType<T> {
    return {
      next: null,
      data,
    };
  }
}

export default List;
