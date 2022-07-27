import Iterator from './Iterator';
import WaitList from './WaitList';
import WaitHashTable from './WaitHashTable';
import WaitingInterface from './WaitingInterface';

type IteratorType = Iterator<WaitingInterface>;

class Client {
  waitListIterator: IteratorType;

  waiitHashTableIterator: IteratorType;

  constructor() {
    // 각 플랫폼의 이터레이터를 가져온다.
    this.waitListIterator = new WaitList().getIterator();
    this.waiitHashTableIterator = new WaitHashTable().getIterator();
  }

  // 입장해야할 손님 정보를 가져온다.
  getGuest(): WaitingInterface | null {
    let guest: IteratorType;
    const waitListGuest = this.waitListIterator.atFirst();
    const waitHashTableGuest = this.waiitHashTableIterator.atFirst();

    if (!waitListGuest) guest = this.waiitHashTableIterator;
    else if (!waitHashTableGuest) guest = this.waitListIterator;
    else if (+waitListGuest.reservedAt > +waitHashTableGuest.reservedAt) guest = this.waiitHashTableIterator;
    else guest = this.waitListIterator;

    return guest.dequeue();
  }

  // 대기 1번에 손님에게 입장 안내 메시지를 보낸다.
  async sendMessage() {
    try {
      const guest = this.getGuest();
      if (!guest) return;
      await fetch('/sms', {
        headers: {
          method: 'POST',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: guest.phoneNumber,
          message: '고객님을 위한 좌석이 준비되었습니다. 지금 바로 입장해주세요.',
        }),
      });
    } catch (error) {}
  }
}

export default Client;
