import Character from './Character/Character';
import Girl from './Character/Girl';
import Man from './Character/Man';
import Black from './Eye/Black';
import Brown from './Eye/Brown';
import Curly from './Hair/Curly';
import Straight from './Hair/Straight';

class Client {
  character: Character;

  constructor() {
    // 조수봉이라는 이름의 곱슬 머리와 갈색 눈을 가진 여자 아이 캐릭터를 만든다.
    this.character = new Girl('조수봉');
    this.character.hair = new Curly();
    this.character.eye = new Brown();

    this.character.getEye();
    this.character.getHair();

    // 아래와 왕경영이라는 이름의 직모와 검정색 눈을 가진 성인 남성 캐릭터를 만들 수도 있다.
    this.character = new Man('조수봉');
    this.character.hair = new Straight();
    this.character.eye = new Black();
  }
}

export default Client;
