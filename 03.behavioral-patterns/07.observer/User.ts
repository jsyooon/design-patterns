import YoutubeObserver from './YoutubeObserver';
import { VideoData } from './YoutubeObserver';

class User {
  observer: YoutubeObserver;
  id: string;

  constructor(id: string, observer: YoutubeObserver) {
    this.id = id;
    this.register(observer);
  }

  register(observer: YoutubeObserver) {
    this.observer = observer;
    this.observer.register(this);
  }

  unregister() {
    this.observer.unregister(this);
  }

  subscribe(user: User) {
    this.observer.subscribe(user, this);
  }

  unsubscribe(user: User) {
    this.observer.unsubscribe(user, this);
  }

  getNotification(publisherId: string, video: VideoData) {
    console.log('*'.repeat(10));
    console.log(`${this.id}가 받은 알림 : `);
    console.log(`${publisherId}님의 새로운 동영상`);
    console.log(`${video.title} : ${video.summary}`);
  }

  createVideo(video: Omit<VideoData, 'updatedAt'>) {
    this.observer.notify(this, { ...video, updatedAt: new Date() });
  }
}

export default User;
