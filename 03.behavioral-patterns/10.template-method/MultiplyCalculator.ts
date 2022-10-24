import Calculator from './Calculator';

class MultiplyCalculator extends Calculator {
  calculuate(): number {
    return (this.x as number) * (this.y as number);
  }
}

export default MultiplyCalculator;
