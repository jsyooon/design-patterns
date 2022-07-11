import WhiteAnchor from '../parts/WhiteAnchor';
import WhiteWheel from '../parts/WhiteWheel';
import ShipPartsFactory from './ShipPartsFactory';

class WhiteShipPartsFactory extends ShipPartsFactory {
  createAnchor() {
    return new WhiteAnchor();
  }

  createWheel() {
    return new WhiteWheel();
  }
}

export default WhiteShipPartsFactory;
