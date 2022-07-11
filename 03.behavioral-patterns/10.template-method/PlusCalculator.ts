import Calculator from './Calculator';

class PlusCalculator extends Calculator {
  calculuate(): number {
    return (this.x as number) + (this.y as number);
  }
}

export default PlusCalculator;
