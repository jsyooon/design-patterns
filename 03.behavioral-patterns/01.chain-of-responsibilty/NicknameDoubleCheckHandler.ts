import NicknameHandler from './NicknameHandler';

class NicknameDoubleCheckHandler extends NicknameHandler {
  constructor(nextHandler?: NicknameHandler) {
    super(nextHandler);
  }

  async handle(nickname: string) {
    if (!(await this.fetch(nickname))) {
      console.log('이미 사용중인 닉네임입니다.');
      return;
    }
    super.handle(nickname);
  }

  async fetch(nickname: string) {
    try {
      const response = await fetch(`/nickname/double-check?nickname=${nickname}`, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
        },
      });
      return response.ok;
    } catch (error) {
      console.error(error);
    }
  }
}

export default NicknameDoubleCheckHandler;
