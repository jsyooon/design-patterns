import Visitor from './Vistitor';

class FetchVisitor extends Visitor {
  async get() {
    try {
      const data = await this.fetch();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetch() {
    const response = await fetch('/vistitor');
    const data: Promise<number> = response.json();
    return data;
  }
}

export default FetchVisitor;
