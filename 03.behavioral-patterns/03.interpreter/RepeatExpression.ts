import Expression from './Expression';

class RepeatExpression implements Expression {
  operator: string;
  left: Expression;
  right: Expression;

  constructor(left: Expression, right: Expression) {
    this.operator = '*';
    this.left = left;
    this.right = right;
  }

  interpret(context: string): string {
    let value = '';
    const operationIndex = context.indexOf(this.operator);
    const string = context.slice(0, operationIndex);
    const count = context.slice(operationIndex + 1);

    for (let i = 0; i < this.right.interpret(count); i++) {
      value += this.left.interpret(string);
    }
    return value;
  }
}

export default RepeatExpression;
