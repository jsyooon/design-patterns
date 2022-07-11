import NicknameHandlerChain from './NicknameHandlerChain';

class Client {
  chain: NicknameHandlerChain;

  constructor(chain: NicknameHandlerChain) {
    this.chain = chain;
  }

  getNickname(nickname: string | null) {
    if (nickname) {
      this.chain.handle(nickname);
    }
  }
}

export default Client;
