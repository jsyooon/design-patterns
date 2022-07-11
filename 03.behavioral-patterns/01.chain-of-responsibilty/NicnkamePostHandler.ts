import NicknameHandler from './NicknameHandler';

class NicknamePostHandler extends NicknameHandler {
  constructor(nextHandler?: NicknameHandler) {
    super(nextHandler);
  }

  async handle(nickname: string) {
    if (!(await this.fetch(nickname))) {
      return;
    }
    console.log('닉네임 저장이 완료되었습니다.');
    super.handle(nickname);
  }

  async fetch(nickname: string) {
    try {
      const response = await fetch(`/nickname/submit`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ nickname }),
      });
      return response.ok;
    } catch (error) {
      console.error(error);
    }
  }
}

export default NicknamePostHandler;
