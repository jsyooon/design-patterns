import ShipFactory from './ShipFactory.js';
import WhiteShip from '../ship/WhiteShip.js';

class WhiteShipFactory extends ShipFactory {
  protected createShip(name: string) {
    return new WhiteShip(name);
  }
}

export default WhiteShipFactory;
