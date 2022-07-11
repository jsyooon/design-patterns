import Command from '../Command';
import MusicPlayer from './MusicPlayer';

class PlayMusicCommand implements Command {
  musicPlayer: MusicPlayer;

  logs: Array<{ date: Date; message: string }>;

  constructor() {
    this.logs = [];
    this.musicPlayer = new MusicPlayer();
  }

  log(message: string) {
    this.logs.push({ date: new Date(), message });
  }

  execute() {
    this.musicPlayer.play();
    this.log(`${this.musicPlayer.playNumber}번 노래 재생`);
  }

  undo() {
    this.musicPlayer.stop();
    this.log(`${this.musicPlayer.playNumber}번 노래 정지`);
  }
}

export default PlayMusicCommand;
