import Calculator from './Calculator';

class Client {
  calculator: Calculator;

  constructor() {
    this.calculator = new Calculator();

    // 덧셈 연산을 콜백으로 전달
    this.calculator.process((x: number, y: number) => x + y);

    // 곱셈 연산을 콜백으로 전달
    this.calculator.process((x: number, y: number) => x * y);
  }
}

export default Client;
