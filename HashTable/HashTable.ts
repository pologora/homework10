import { djb2Hash } from '../hashFunction/hashFunction';

export class HashTable<T> {
  private table: { key: string; value: T }[][];
  length: number;
  private loadFactor: number;

  constructor(size: number = 10, loadFactor: number = 0.7) {
    this.table = new Array(size).fill(null).map(() => []);
    this.length = 0;
    this.loadFactor = loadFactor;
  }

  private hash(key: string) {
    return djb2Hash(key, this.table.length);
  }

  insert(key: string, value: T) {
    const hashedKey = this.hash(key);
    this.table[hashedKey].push({ key, value });

    this.length += 1;
    if (this.length + 1 > this.table.length * this.loadFactor) {
      this.resizeTable();
    }
  }

  get(key: string) {
    const hashedKey = this.hash(key);
    const bucket = this.table[hashedKey];

    return bucket?.find((item) => item.key === key)?.value;
  }

  delete(key: string) {
    const hashedKey = this.hash(key);
    const bucket = this.table[hashedKey];

    if (!bucket) {
      return undefined;
    }

    const newBucket = bucket.filter((item) => item.key !== key);

    if (newBucket.length !== bucket.length) {
      this.table[hashedKey] = newBucket;
      this.length -= 1;
    }
  }

  private resizeTable() {
    const newSize = Math.ceil(this.table.length * 1.5);
    const newTable = new Array(newSize).fill(null).map(() => []);

    const oldTable = this.table;
    this.table = newTable;
    this.length = 0;

    oldTable.forEach((bucket) => {
      bucket.forEach(({ key, value }) => {
        this.insert(key, value);
      });
    });
  }

  getTableSize() {
    return this.table.length;
  }

  setLoadFactor(loadFactor: number) {
    this.loadFactor = loadFactor;
  }
}
