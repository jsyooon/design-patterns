import Calculator from './Calculator';
import MultiplyCalculator from './MultiplyCalculator';
import PlusCalculator from './PlusCalculator';

class Client {
  calculator: Calculator;

  constructor() {
    // 덧셈 계산기 사용
    this.calculator = new PlusCalculator();
    /*
      // 곱셈 계산기 사용
      this.calculator = new MultiplyCalculator();
    */

    this.calculator.process();
  }
}

export default Client;
