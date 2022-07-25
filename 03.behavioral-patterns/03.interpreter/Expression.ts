interface Expression {
  interpret(context: string): number | string;
}

export default Expression;
