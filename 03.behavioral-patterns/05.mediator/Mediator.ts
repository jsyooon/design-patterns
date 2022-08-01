import CheckoutAndReturn from './CheckoutAndReturn';
import Reservation from './Reservation';
import Display from './Display';
import type { BookData, DisplayParameter } from './types';

class Mediator {
  checkoutAndReturn: CheckoutAndReturn;

  reservation: Reservation;

  display: Display;

  constructor() {
    this.checkoutAndReturn = new CheckoutAndReturn();
  }

  checkoutBook(bookId: string) {
    return this.checkoutAndReturn.checkout(bookId);
  }

  returnBook(bookId: string) {
    return this.checkoutAndReturn.return(bookId);
  }

  reserveBook(bookId: string) {
    return this.reservation.reserve(bookId);
  }

  addDisplay(book: BookData, type: DisplayParameter) {
    switch (type) {
      case 'checkout':
        this.display.addCheckout(book);
        return;

      case 'reservation':
        this.display.addReservation(book);
        return;
      default:
        return;
    }
  }

  removeDisplay(book: BookData, type: DisplayParameter) {
    switch (type) {
      case 'checkout':
        this.display.removeCheckout(book);
        return;
      case 'reservation':
        this.display.removeReservation(book);
        return;
      default:
        return;
    }
  }
}

export default Mediator;
