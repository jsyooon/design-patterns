import Expression from './Expression';

class CountExpression implements Expression {
  interpret(context: string) {
    return +context;
  }
}

export default CountExpression;
