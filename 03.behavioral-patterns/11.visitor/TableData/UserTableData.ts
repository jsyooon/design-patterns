import TableData from './tableData';

class UserTableData extends TableData {
  constructor(table: HTMLTableElement | null) {
    super(table);
    this.type = 'user';
  }
}

export default UserTableData;
