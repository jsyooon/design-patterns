import Parser from '../Parser/Parser';

class TableData {
  type: string;

  value: string;

  constructor(table: HTMLTableElement | null) {
    this.value = `${table?.innerHTML ?? ''}`;
  }

  accept(parser: Parser<{ [key in string]: string } | string>) {
    parser.parse(this);
  }
}

export default TableData;
