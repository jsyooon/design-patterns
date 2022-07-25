import ProxyVisitor from './ProxyVisitor';
import Visitor from './Vistitor';

class Client {
  visitor: ProxyVisitor;

  constructor() {
    this.visitor = new ProxyVisitor();
    this.getVisitor();
  }

  async getVisitor() {
    const visitor = await this.visitor.get();
    console.log(`${visitor}명이 방문하였습니다.`);
  }
}

export default Client;
