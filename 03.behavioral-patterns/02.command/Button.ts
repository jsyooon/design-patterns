import Command from './Command';

class Button {
  command: Array<Command>;

  constructor() {
    this.command = [];
  }

  setCommand(command: Command) {
    this.command.push(command);
  }

  press() {
    if (!this.command.length) return;
    this.command.at(-1)?.execute();
  }

  undo() {
    if (!this.command.length) return;
    const command = this.command.pop();
    command?.undo();
  }
}

export default Button;
