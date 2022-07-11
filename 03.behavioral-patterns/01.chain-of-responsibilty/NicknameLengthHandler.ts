import NicknameHandler from './NicknameHandler';

class NicknameLengthHandler extends NicknameHandler {
  constructor(nextHandler?: NicknameHandler) {
    super(nextHandler);
  }

  handle(nickname: string) {
    if (nickname.length < 2 || nickname.length > 10) {
      console.log('닉네임 길이는 2글자 이상 10글자 이하여야 합니다.');
      return;
    }
    super.handle(nickname);
  }
}

export default NicknameLengthHandler;
