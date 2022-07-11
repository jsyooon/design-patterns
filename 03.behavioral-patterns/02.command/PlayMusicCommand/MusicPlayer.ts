class MusicPlayer {
  playNumber: number;

  constructor() {
    this.playNumber = 0;
  }

  play() {
    console.log(`${this.playNumber}번 음악 재생 로직`);
    this.playNumber++;
  }

  stop() {
    console.log(`${this.playNumber}번 음악 정지 로직`);
  }
}

export default MusicPlayer;
