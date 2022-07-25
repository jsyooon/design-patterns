import Expression from './Expression';

class StringExpression implements Expression {
  interpret(context: string) {
    return context;
  }
}

export default StringExpression;
