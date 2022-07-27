abstract class Iterator<T> {
  // 대기 1번 사용자 정보를 확인한다.
  abstract atFirst(): T | null;

  // 대기 1번 사용자를 dequeu 한다.
  abstract dequeue(): T | null;
}

export default Iterator;
