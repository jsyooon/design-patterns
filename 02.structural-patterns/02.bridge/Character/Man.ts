import Character from './Character';

class Man extends Character {
  constructor(name: string) {
    super(name);
    super.type = '남성';
  }
}

export default Man;
