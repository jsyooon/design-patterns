import Command from '../Command';
import Game from './Game';

class GameStartCommand implements Command {
  // receiver
  game: Game;

  constructor() {
    this.game = new Game();
  }

  undo() {
    this.game.stop();
  }

  execute() {
    this.game.start();
  }
}

export default GameStartCommand;
