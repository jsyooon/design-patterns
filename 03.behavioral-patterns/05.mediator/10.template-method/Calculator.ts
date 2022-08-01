abstract class Calculator {
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

  abstract calculuate(): number;

  print() {
    document.write(`결과는 ${this.result} 입니다.`);
  }

  process() {
    this.getValues();
    if (!this.validate()) return;
    this.calculuate();
    this.print();
  }
}

export default Calculator;
