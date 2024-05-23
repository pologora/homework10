import { beforeEach } from 'node:test';
import { HashTable } from '../HashTable/HashTable';
import { test, describe, expect } from 'vitest';

describe('Hash table', () => {
  let hashTable = new HashTable();

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('should correctly insert values to a hash map', () => {
    hashTable.insert('a', 1);
    hashTable.insert('b', 2);
    hashTable.insert('c', 3);
    hashTable.insert('d', 4);

    expect(hashTable.get('c')).toBe(3);
    expect(hashTable.get('a')).toBe(1);
    expect(hashTable.get('b')).toBe(2);
    expect(hashTable.get('d')).toBe(4);
  });

  test('should correctly delete values from a hash map', () => {
    hashTable.insert('a', 1);
    hashTable.insert('b', 2);
    hashTable.insert('c', 3);
    hashTable.insert('d', 4);
    hashTable.delete('a');
    hashTable.delete('b');

    expect(hashTable.get('c')).toBe(3);
    expect(hashTable.get('a')).toBe(undefined);
    expect(hashTable.get('b')).toBe(undefined);
    expect(hashTable.get('d')).toBe(4);
  });

  test('should correctly increase a size of a map', () => {
    const key = 'a';
    for (let i = 0; i < 12; i++) {
      hashTable.insert(key + i, i);
    }

    expect(hashTable.getTableSize()).toBe(23);
  });
});
