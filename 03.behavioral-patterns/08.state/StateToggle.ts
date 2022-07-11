import State from './State';

class StateToggle {
  #state: State;
  button: HTMLButtonElement;

  constructor() {
    this.createButton();
    this.addEvent();
  }

  set state(state: State) {
    this.#state = state;
  }

  toggle() {
    this.#state.toggle();
  }

  createButton() {
    this.button = document.createElement('button');
    document.body.append(this.button);
  }

  addEvent() {
    this.button.addEventListener('click', this.toggle.bind(this));
  }
}

export default StateToggle;
