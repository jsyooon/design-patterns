import WhiteShipFactory from './factory/WhiteShipFactory';
import Ship from './ship/Ship';

class Client {
  ship: Ship[] = [];

  constructor(email: string) {
    this.orderShip(new WhiteShipFactory().orderShip('흰 배', email));
  }

  orderShip(ship: Ship) {
    this.ship.push(ship);
  }

  getShip() {
    if (!this.ship.length) {
      console.log(`아직 배가 없군요. 분발하세요.`);
      return;
    }

    this.ship.forEach((ship: Ship, index: number) => {
      console.log(`${index + 1} 번 : ${ship.name} ${ship.logo}`);
      console.log(`부품 : ${ship.wheel.name}`);
      console.log(`부품 : ${ship.anchor.name}`);
    });
  }
}

export default Client;
