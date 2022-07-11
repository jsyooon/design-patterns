import Button from './Button';
import GameStartCommand from './GameStartCommand/GameStartCommand';
import LightOnCommand from './LightOnCommand/LightOnCommand';
import PlayMusicCommand from './PlayMusicCommand/PlayMusicCommand';

class Client {
  button: Button;

  constructor() {
    this.button = new Button();

    // 원하는 커맨드 클래스를 선택
    this.button.setCommand(new PlayMusicCommand());
    this.button.press();
    this.button.undo();

    this.button.setCommand(new LightOnCommand());
    this.button.press();

    this.button.setCommand(new GameStartCommand());
    this.button.press();
    this.button.undo();
    this.button.undo();
  }
}

export default Client;
