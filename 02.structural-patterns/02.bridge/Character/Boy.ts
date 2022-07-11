import Character from './Character';

class Boy extends Character {
  constructor(name: string) {
    super(name);
    super.type = '남자 아이';
  }
}

export default Boy;
