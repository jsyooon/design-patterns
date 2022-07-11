abstract class NicknameHandler {
  nextHandler?: NicknameHandler;

  constructor(nextHandler?: NicknameHandler) {
    this.nextHandler = nextHandler;
  }

  handle(nickname: string) {
    if (this.nextHandler) {
      this.nextHandler.handle(nickname);
    }
  }
}

export default NicknameHandler;
