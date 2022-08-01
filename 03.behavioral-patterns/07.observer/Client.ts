import User from './User';
import YoutubeObserver from './YoutubeObserver';

class Client {
  youtubeObserver: YoutubeObserver;

  user1: User;
  user2: User;
  user3: User;

  constructor() {
    this.youtubeObserver = new YoutubeObserver();

    this.user1 = new User('youtuber1', this.youtubeObserver);
    this.user2 = new User('youtuber2', this.youtubeObserver);
    this.user3 = new User('youtuber3', this.youtubeObserver);

    this.user1.subscribe(this.user3);
    this.user2.subscribe(this.user1);
    this.user2.subscribe(this.user3);

    this.user1.createVideo({
      title: 'Javascript 기초',
      summary: 'Javascript 기초를 배워볼까요?',
    });

    this.user3.createVideo({
      title: '직장인 주중 Vlog',
      summary: '월화수목금금금 일주일은 왜이렇게 길죠?',
    });

    this.user2.unregister();

    this.user3.createVideo({
      title: '직장인 주말 Vlog',
      summary: '토일은 왜이렇게 짧죠?',
    });
  }
}

export default Client;
