import State from './State';
import Dark from './Dark';

class Light extends State {
  toggle() {
    this.doSomething();
    this.stateToggle.state = new Dark();
  }

  doSomething() {
    console.log('Light 모드일 때 할 일을 한다.');
  }
}

export default Light;
