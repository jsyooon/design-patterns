import Authorization from './Authorization';
import Token from './Token';
import UserInformation from './UserInformation';

class OAuthFacade {
  CLIENT_ID = 'clinet1234';
  authorization: Authorization;
  token: Token;
  userInformation: UserInformation;

  constructor() {
    this.authorization = new Authorization();
    this.token = new Token();
    this.userInformation = new UserInformation();
  }

  async authorize() {
    try {
      const authorization = await this.authorization.getCode(this.CLIENT_ID);
      const token = await this.token.getToken({ client_id: this.CLIENT_ID, authorization_code: authorization.code });
      const userData = await this.userInformation.fetch(token);

      return userData;
    } catch (error) {
      return null;
    }
  }
}

export default OAuthFacade;
