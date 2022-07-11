import Ship from '../ship/Ship.js';

abstract class ShipFactory {
  public orderShip(name: string, email: string) {
    this.validate(name, email);
    this.prepareFor(name);
    const ship = this.createShip(name);
    this.sendEmailTo(email, ship);
    return ship;
  }

  private validate(name: string, email: string) {
    if (!name) throw new Error('이름을 입력해주세요.');
    if (!email) throw new Error('email을 입력해주세요.');
  }

  protected prepareFor(name: string) {
    console.log(`.....${name} 만드는 중.....`);
  }

  protected abstract createShip(name: string): Ship;

  protected sendEmailTo(email: string, ship: Ship) {
    console.log(`${email}님에게 메일을 보냅니다...`);
    console.log(`!! ${ship.name} 다 만들었습니다. !!`);
  }
}
export default ShipFactory;
