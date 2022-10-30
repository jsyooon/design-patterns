import TableData from '../TableData/tableData';
import Parser from './Parser';

class JSONParser extends Parser<{ [key in string]: string }> {
  parse(tableData: TableData) {
    switch (tableData.type) {
      case 'user':
        return this.parseUserTable(tableData);
      case 'prouct':
        return this.parseProductTable(tableData);
      default:
        return { key: '테이블을 json으로 변환합니다.' };
    }
  }

  parseUserTable(tableData: TableData) {
    return { user: tableData.value };
  }

  parseProductTable(tableData: TableData) {
    return { prouct: tableData.value };
  }
}

export default JSONParser;
