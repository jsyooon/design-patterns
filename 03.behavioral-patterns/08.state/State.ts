import StateToggle from './StateToggle';

abstract class State {
  stateToggle: StateToggle;

  constructor() {
    this.stateToggle = new StateToggle();
  }

  abstract toggle(): void;

  protected abstract doSomething(): void;
}

export default State;
