import Wheel from '../parts/Wheel';
import Anchor from '../parts/Anchor';

abstract class ShipPartsFactory {
  abstract createAnchor(): Anchor;

  abstract createWheel(): Wheel;
}

export default ShipPartsFactory;
