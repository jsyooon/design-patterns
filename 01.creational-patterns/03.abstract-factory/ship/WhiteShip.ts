import Ship from './Ship.js';

class WhiteShip extends Ship {
  constructor(name: string) {
    super(name);
    super.logo = '🛳';
  }
}

export default WhiteShip;
