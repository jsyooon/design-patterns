import TableData from '../TableData/tableData';
import Parser from './Parser';

class XMLParser extends Parser<string> {
  parse(tableData: TableData) {
    switch (tableData.type) {
      case 'user':
        return this.parseUserTable(tableData);
      case 'product':
        return this.parseProductTable(tableData);
      default:
        return '테이블을 xml로 파싱합니다.';
    }
  }

  parseUserTable(tableData: TableData) {
    return `사용자 테이블 : ${tableData.value}`;
  }

  parseProductTable(tableData: TableData) {
    return `제품 테이블 : ${tableData.value}`;
  }
}

export default XMLParser;
