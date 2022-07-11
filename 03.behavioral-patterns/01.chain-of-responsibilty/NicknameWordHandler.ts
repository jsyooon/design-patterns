import NicknameHandler from './NicknameHandler';

class NicknameWordHandler extends NicknameHandler {
  constructor(nextHandler?: NicknameHandler) {
    super(nextHandler);
  }

  handle(nickname: string) {
    if (/(병신|비융신|ㅂㅅ|피융신|븅신|뵹신|퓽신|뿅신)/gi.test(nickname)) {
      console.log('비속어는 사용할 수 없습니다.');
      return;
    }
    super.handle(nickname);
  }
}

export default NicknameWordHandler;
