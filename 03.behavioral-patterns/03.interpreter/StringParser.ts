import StringExpression from './StringExpression';
import RepeatExpression from './RepeatExpression';
import Expression from './Expression';
import CountExpression from './CountExpression';
import RemoveExpression from './RemoveExpression';

class StringParser {
  operator: string;
  expression: Expression;

  constructor(operator: string) {
    try {
      this.operator = operator;
      this.expression = this.setOperatorExpression(new StringExpression(), new CountExpression());
    } catch (error) {
      alert(error.message);
    }
  }

  interpret(context: string) {
    return this.expression.interpret(context);
  }

  setOperatorExpression(left: Expression, right: Expression) {
    switch (this.operator) {
      case '*':
        return new RepeatExpression(left, right);
      case '-':
        return new RemoveExpression(left, right);
      default:
        throw Error('알맞은 표현식이 없습니다.');
    }
  }

  setRightExpression() {
    switch (this.operator) {
      case '*':
        return new CountExpression();

      default:
        return new StringExpression();
    }
  }
}

export default StringParser;
