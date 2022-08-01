import User from './User';

export interface VideoData {
  title: string;
  summary?: string;
  updatedAt: Date;
}

class YoutubeObserver {
  subscribers: Map<string, Set<User>>;

  constructor() {
    this.subscribers = new Map();
  }

  private hasPublisher(publisherId: string) {
    return this.subscribers.has(publisherId);
  }

  register(user: User) {
    if (this.hasPublisher(user.id)) {
      alert('이미 등록하였습니다.');
      return;
    }
    this.subscribers.set(user.id, new Set());
  }

  unregister(user: User) {
    if (!this.hasPublisher(user.id)) {
      alert('유효하지 않는 사용자입니다.');
      return;
    }

    this.subscribers.forEach((subscribers) => {
      subscribers.delete(user);
    });

    this.subscribers.delete(user.id);
  }

  subscribe(publisher: User, subscriber: User) {
    if (!this.hasPublisher(publisher.id)) {
      alert('유효하지 않는 사용자입니다.');
      return;
    }
    if (this.subscribers.get(publisher.id)?.add(subscriber)) {
      console.log(`${subscriber.id}님이 ${publisher.id}님을 구독하였습니다`);
    }
  }

  unsubscribe(publisher: User, subscriber: User) {
    if (!this.hasPublisher(publisher.id)) {
      alert('유효하지 않는 사용자입니다');
    }
    if (this.subscribers.get(publisher.id)?.delete(subscriber)) {
      console.log(`${subscriber.id}님이 ${publisher.id}님을 구독해지하였습니다`);
    }
  }

  notify(publisher: User, video: VideoData) {
    if (!this.hasPublisher(publisher.id)) {
      alert('유효하지 않는 사용자입니다.');
      return;
    }
    this.subscribers.get(publisher.id)?.forEach((subscriber: User) => {
      subscriber.getNotification(publisher.id, video);
    });
  }
}

export default YoutubeObserver;
