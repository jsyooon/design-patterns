import College from './College';
import { BookData } from './types';

class DueDate extends College {
  async getOverDueBooks() {
    try {
      const response = await fetch('/api/overdue', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: Array<BookData> = await response.json();
      data.forEach(async (book) => {
        await this.mediator.returnBook(book.id);
        this.mediator.removeDisplay(book, 'checkout');
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default DueDate;
