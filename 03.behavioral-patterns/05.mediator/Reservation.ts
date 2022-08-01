import College from './College';
import type { BookData } from './types';

class Reservation extends College {
  async reserve(bookId: string) {
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookId,
        }),
      });
      const data: BookData = await response.json();
      this.mediator.addDisplay(data, 'reservation');
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAvailableBooks() {
    try {
      const response = await fetch('/api/availableBooks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: Array<BookData> = await response.json();
      data.forEach(async (book) => {
        await this.mediator.checkoutBook(book.id);
        this.mediator.removeDisplay(book, 'reservation');
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default Reservation;
