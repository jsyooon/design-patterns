import ShipFactory from './ShipFactory.js';
import BlackShip from '../ship/BlackShip.js';

class BlackShipFactory extends ShipFactory {
  protected createShip(name: string) {
    return new BlackShip(name);
  }
}

export default BlackShipFactory;
