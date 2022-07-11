interface KaKaoUser {
  kakaoId: string;
  userName: string;
}

class KaKaoLogin {
  async authorize() {
    try {
      const response = await fetch('/kakao/oauth');
      const data: Promise<KaKaoUser> = response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default KaKaoLogin;
