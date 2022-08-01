export interface BookData {
  id: string;
  name: string;
  writer: string;
  status: 'CHECKOUT' | 'AVAILABLE';
}

export interface BookResponse extends Response {
  data: BookData;
}

export type DisplayParameter = 'checkout' | 'reservation';
