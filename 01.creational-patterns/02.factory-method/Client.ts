import WhiteShipFactory from './factory/WhiteShipFactory.js';
import BlackShipFactory from './factory/BlackShipFactory.js';
import Ship from './ship/Ship.js';

class Client {
  ship: Ship[] = [];

  constructor(email: string) {
    this.orderShip(new WhiteShipFactory().orderShip('흰 배', email));
    this.orderShip(new BlackShipFactory().orderShip('검정 배', email));
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
    });
  }
}

export default Client;
