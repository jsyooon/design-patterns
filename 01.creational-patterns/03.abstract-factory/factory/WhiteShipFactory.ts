import ShipFactory from './ShipFactory.js';
import WhiteShip from '../ship/WhiteShip.js';
import WhiteShipPartsFactory from '../partsFactory/WhiteShipPartsFactory.js';

class WhiteShipFactory extends ShipFactory {
  shipPartsFactory: WhiteShipPartsFactory;
  constructor() {
    super();
    this.shipPartsFactory = new WhiteShipPartsFactory();
  }
  protected createShip(name: string) {
    const ship = new WhiteShip(name);
    ship.anchor = this.shipPartsFactory.createAnchor();
    ship.wheel = this.shipPartsFactory.createWheel();
    return ship;
  }
}

export default WhiteShipFactory;
