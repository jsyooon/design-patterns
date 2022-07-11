import NicknameDoubleCheckHandler from './NicknameDoubleCheckHandler';
import NicknameHandler from './NicknameHandler';
import NicknameLengthHandler from './NicknameLengthHandler';
import NicknameWordHandler from './NicknameWordHandler';
import NicknamePostHandler from './NicnkamePostHandler';

class NicknameHandlerChain {
  chain: NicknameHandler;
  constructor() {
    this.chain = new NicknameLengthHandler(new NicknameWordHandler(new NicknameDoubleCheckHandler(new NicknamePostHandler())));
  }

  handle(nickname: string) {
    this.chain.handle(nickname);
  }
}

export default NicknameHandlerChain;
