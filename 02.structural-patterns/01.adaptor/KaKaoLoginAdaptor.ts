import KaKaoLogin from './KaKaoLogin';
import Login, { User } from './Login';

class KaKaoLoginAdaptor implements Login {
  kakaoLogin: KaKaoLogin;

  constructor() {
    this.kakaoLogin = new KaKaoLogin();
  }
  async login() {
    const data = await this.kakaoLogin.authorize();
    if (!data) return data;

    return {
      id: data.kakaoId,
      name: data.userName,
    } as User;
  }
}

export default KaKaoLoginAdaptor;
