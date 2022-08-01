import College from './College';
import type { BookData } from './types';

class Display extends College {
  addCheckout(book: BookData) {
    console.log(`대여 : ${book.name}`);
  }

  removeCheckout(book: BookData) {
    console.log(`반납 : ${book.name}`);
  }

  addReservation(book: BookData) {
    console.log(`예약 : ${book.name}`);
  }

  removeReservation(book: BookData) {
    console.log(`예약 취소 : ${book.name}`);
  }
}

export default Display;
