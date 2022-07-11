import Ship from './Ship.js';

class BlackShip extends Ship {
  constructor(name: string) {
    super(name);
    super.logo = '⛴';
  }
}

export default BlackShip;
