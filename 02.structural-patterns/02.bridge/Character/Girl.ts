import Character from './Character';

class Girl extends Character {
  constructor(name: string) {
    super(name);
    super.type = '여자 아이';
  }
}

export default Girl;
