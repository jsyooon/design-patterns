import State from './State';
import StateToggle from './StateToggle';
import Light from './Light';

class Dark extends State {
  toggle() {
    this.doSomething();
    this.stateToggle.state = new Light();
  }

  doSomething() {
    console.log('Dark 모드일 때 할 일을 한다.');
  }
}

export default Dark;
