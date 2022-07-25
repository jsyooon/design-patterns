import StringParser from './StringParser';

class Client {
  repeatParser: StringParser;
  removeParser: StringParser;
  constructor() {
    this.repeatParser = new StringParser('*');
    this.repeatParser.interpret('abcde*5');
  }
}

export default Client;
