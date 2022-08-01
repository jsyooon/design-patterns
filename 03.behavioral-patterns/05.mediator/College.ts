import Mediator from './Mediator';

abstract class College {
  mediator: Mediator;

  constructor() {
    this.mediator = new Mediator();
  }
}

export default College;
