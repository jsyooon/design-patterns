import JSONParser from './Parser/JSONParser';
import XMLParser from './Parser/XMLParser';
import ProductTableData from './TableData/ProductTableData';
import UserTableData from './TableData/UserTableData';

class Client {
  userTableData: UserTableData;

  productTableData: ProductTableData;

  constructor() {
    const userTable = document.querySelector<HTMLTableElement>('#userTable');
    const productTable = document.querySelector<HTMLTableElement>('#productTable');

    const jsonParser = new JSONParser();
    const xmlParser = new XMLParser();

    // 사용자 테이블을 JSON으로 파싱한다.
    this.userTableData = new UserTableData(userTable);
    this.userTableData.accept(jsonParser);

    // 제품 테이블을 XML으로 파싱한다.
    this.productTableData = new ProductTableData(productTable);
    this.productTableData.accept(xmlParser);
  }
}

export default Client;
