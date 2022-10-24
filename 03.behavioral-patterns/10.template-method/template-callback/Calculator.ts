class Calculator {
  x?: number;
  y?: number;
  result: number;

  getNumberValue(value?: string) {
    if (value && typeof value === 'string') return +value;
  }

  getValues() {
    this.x = this.getNumberValue(document.querySelector<HTMLInputElement>('input[name=x]')?.value);
    this.y = this.getNumberValue(document.querySelector<HTMLInputElement>('input[name=y]')?.value);
  }

  validate() {
    if (!(this.x && this.y)) {
      alert('올바른 값을 입력해주세요.');
      return false;
    }
    return true;
  }

  print() {
    document.write(`결과는 ${this.result} 입니다.`);
  }

  process(callback: (x: number, y: number) => number) {
    this.getValues();
    if (!this.validate()) return;
    this.result = callback(this.x as number, this.y as number);
    this.print();
  }
}

export default Calculator;
