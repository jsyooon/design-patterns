import OAuthFacade from './OAuthFacade';

interface UserDataType {
  name: string;
  email: string;
}

class Client {
  name: string;
  email: string;
  oauthFacade: OAuthFacade;

  constructor() {
    this.oauthFacade = new OAuthFacade();
  }

  async login() {
    const userData: UserDataType = await this.oauthFacade.authorize();
    if (userData) {
      this.success(userData);
    } else {
      this.fail();
    }
  }

  fail() {
    console.log('OAuth 인증에 실패하였습니다.');
  }

  success({ name, email }: UserDataType) {
    console.log(`${name}님이 로그인하였습니다.`);
    this.name = name;
    this.email = email;
  }
}

export default Client;
