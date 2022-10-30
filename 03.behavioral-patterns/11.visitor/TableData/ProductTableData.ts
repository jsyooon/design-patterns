import TableData from './tableData';

class ProductTableData extends TableData {
  constructor(table: HTMLTableElement | null) {
    super(table);
    this.type = 'product';
  }
}

export default ProductTableData;
