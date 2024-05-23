import { describe, expect, test } from 'vitest';
import { djb2Hash } from '../hashFunction/hashFunction';

describe('djb2Hash', () => {
  test('should hash "hello" correctly within a table size of 10', () => {
    const result = djb2Hash('hello', 10);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(10);
  });

  test('should hash "world" correctly within a table size of 100', () => {
    const result = djb2Hash('world', 100);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(100);
  });

  test('should produce different hashes for different inputs within the same table size', () => {
    const result1 = djb2Hash('hello', 50);
    const result2 = djb2Hash('world', 50);
    expect(result1).not.toBe(result2);
  });

  test('should produce the same hash for the same input and table size', () => {
    const result1 = djb2Hash('same', 20);
    const result2 = djb2Hash('same', 20);
    expect(result1).toBe(result2);
  });

  test('should hash strings consistently for large table sizes', () => {
    const result1 = djb2Hash('consistent', 1000);
    const result2 = djb2Hash('consistent', 1000);
    expect(result1).toBe(result2);
  });
});
