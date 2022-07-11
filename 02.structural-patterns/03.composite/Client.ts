import Directory from './Directory';
import File from './File';

class Client {
  directory1: Directory;
  directory2: Directory;

  file1: File;
  file2: File;

  constructor() {
    this.directory1 = new Directory('새 폴더');
    this.directory2 = new Directory('새 폴더 2');

    this.file1 = new File('새 문서', 10);
    this.file2 = new File('제목 없음', 50);

    this.directory1.add(new Directory('새 폴더 2'));
    this.directory1.add(this.file2);
    this.directory2.add(this.file1);

    // 디렉토리나 파일 모두 크기를 구할 땐 동일한 size getter를 사용한다.
    this.print(this.directory1.size);
    this.print(this.file2.size);

    // 디렉토리나 파일 모두 생성 날짜를 확인할 땐 동일한 createdAt getter를 사용한다.
    this.print(this.directory1.createdAt.toDateString());
    this.print(this.file2.createdAt.toDateString());
  }

  print(value: string | number) {
    console.log(value);
  }
}

export default Client;
