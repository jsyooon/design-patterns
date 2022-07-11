import Hair from '../Hair/Hair';
import Eye from '../Eye/Eye';

abstract class Character {
  #hair: Hair;
  #eye: Eye;
  #name: string;
  #type: string;

  constructor(name: string) {
    this.#name = name;
  }

  set type(type: string) {
    this.#type = type;
  }

  set hair(hair: Hair) {
    this.#hair = hair;
  }

  set eye(eye: Eye) {
    this.#eye = eye;
  }

  getHair() {
    console.log(`${this.#name}은 ${this.hair.style}의 헤어 스타일을 선택하였습니다.`);
  }

  getEye() {
    console.log(`${this.#name}은 ${this.hair.style}의 눈 모양을 선택하였습니다.`);
  }
}

export default Character;
