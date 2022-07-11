import Command from '../Command';
import Light from './Light';

class LightOnCommand implements Command {
  // receiver
  light: Light;

  constructor() {
    this.light = new Light();
  }

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}

export default LightOnCommand;
