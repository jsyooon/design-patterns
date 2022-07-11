import KaKaoLoginAdaptor from './KaKaoLoginAdaptor';
import Login from './Login';

class Client {
  kakaoLogin: Login;

  constructor() {
    this.kakaoLogin = new KaKaoLoginAdaptor();
  }

  async login() {
    const data = await this.kakaoLogin.login();
    if (!data) {
      alert('로그인 정보가 없습니다.');
      return;
    }
    this.hello(data.name);
  }

  hello(name: string) {
    console.log(`${name}님 안녕하세요!`);
  }
}

export default Client;
