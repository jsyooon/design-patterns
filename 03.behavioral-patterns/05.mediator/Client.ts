import College from './College';
import { BookData } from './types';

type BookNameAndId = Pick<BookData, 'name' | 'id'>;

class Client extends College {
  async addEventCheckout({ name, id }: BookNameAndId) {
    const checkout = confirm(`${name}을 대여하시겠습니까?`);
    if (!checkout) return;
    await this.mediator.checkoutBook(id);
    alert('대여가 완료되었습니다.');
  }

  async addEventReturn({ name, id }: BookNameAndId) {
    const returnBook = confirm(`${name}을 반납하시겠습니까?`);
    if (!returnBook) return;
    await this.mediator.checkoutBook(id);
    alert('반납이 완료되었습니다.');
  }

  async addEventReservation({ name, id }: BookNameAndId) {
    const reservation = confirm(`${name}을 예약하시겠습니까?`);
    if (!reservation) return;
    await this.mediator.checkoutBook(id);
    alert('예약이 완료되었습니다.');
  }
}

export default Client;
