export interface Item {
  content: string;
  status: 'ADDED' | 'COMPLETED' | 'DELETED';
  id: number;
}
