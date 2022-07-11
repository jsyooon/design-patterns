import Character from './Character';

class Woman extends Character {
  constructor(name: string) {
    super(name);
    super.type = '여성';
  }
}

export default Woman;
