import FetchVisitor from './FetchVistior';
import Visitor from './Vistitor';

class ProxyVisitor extends Visitor {
  lastFetched: number;

  lastCount: number;

  fetchVisitor: FetchVisitor;

  constructor() {
    super();
    this.lastFetched = 0;
    this.fetchVisitor = new FetchVisitor();
  }

  async get() {
    try {
      const now = +new Date();
      if (now - this.lastFetched > this.cacheTime) {
        const data = await this.fetchVisitor.get();
        if (typeof data === 'number') {
          this.cacheData(data, now);
        } else {
          throw new Error();
        }
      }
      return this.lastCount;
    } catch (error) {
      console.error(error);
      alert('잠시 후 다시 시도해주세요.');
    }
  }

  cacheData(lastFetched: number, lastCount: number) {
    this.lastFetched = lastFetched;
    this.lastCount = lastCount;
  }

  get cacheTime() {
    return 5 * 60 * 1000;
  }
}

export default ProxyVisitor;
