import TableData from '../TableData/TableData';

abstract class Parser<T> {
  abstract parse(tableData: TableData): T;

  abstract parseUserTable(tableData: TableData): T;

  abstract parseProductTable(tableData: TableData): T;
}

export default Parser;
