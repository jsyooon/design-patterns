import Expression from './Expression';

class RemoveExpression {
  operator: string;
  left: Expression;
  right: Expression;

  constructor(left: Expression, right: Expression) {
    this.operator = '-';
    this.left = left;
    this.right = right;
  }

  interpret(context: string): string {
    let index = 0;
    let value = '';
    const operationIndex = context.indexOf(this.operator);
    const string = context.slice(0, operationIndex);
    const count = context.slice(operationIndex + 1);

    while (index < context.length) {
      index++;
    }
    return value;
  }
}

export default RemoveExpression;
