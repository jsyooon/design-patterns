import College from './College';
import type { BookData } from './types';

class CheckoutAndReturn extends College {
  async checkout(bookId: string) {
    const bookData = await this.fetch(bookId, 'POST');
    this.mediator.addDisplay(bookData, 'checkout');
  }

  async return(bookId: string) {
    const bookData = await this.fetch(bookId, 'DELETE');
    this.mediator.removeDisplay(bookData, 'checkout');
  }

  async fetch(bookId: string, method: 'POST' | 'DELETE') {
    try {
      const response = await fetch('/api/checkout', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookId,
        }),
      });
      const data: BookData = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default CheckoutAndReturn;
