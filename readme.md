# Homework 10

## Hash function (DJB2 Hash Function)

It operates by repeatedly mixing the current hash value with the ASCII codes of the characters in the input string.
The value `5381` is used in the `DJB2` hash function because it was empirically determined to produce good hash distributions when combined with the multiplier `33`.

## class Hash Table

Parameters:

- `size`: the size of a hash table
- `loadFactor`: the load factor of the hash map

Constructor:

- initialize a new hash table object with size (default 10) and load factor (default 0.7)

Properties:

- private `table`: { key: string; value: T }[][];
- `length`: counter for added items to the hash map
- private `loadFactor`: load factor

Methods:

- private `hash`: uses djb2 hash function
- `insert`: insert a key-value pair object into the hash table
- `get`: returns a value
- `delete`: deletes key-value pair from the hash table
- private `resizeTable`: resizes the hash table when the load factor exceeds
- `getTableSize`: returns size of a hash table
- `setLoadFactor`: changes load factor

## Performance Analysis

### Insertion:

- average case: O(1)
- worst case: O(n)
  Insertion involves hashing the key, which is O(1), and then adding the key-value pair to the appropriate bucket. If the load factor exceeds 0.7, the table is resized, which involves rehashing all existing entries, making it O(n).

### Getting

- average case: O(1)
- worst case: O(n) (if all keys hash to the same bucket)
  Retrieval involves hashing the key and then searching through the small bucket, which on average takes constant time.

### Deletion

- average case: O(1)
- worst case: O(n) (if all keys hash to the same bucket)

For collision handling was used separate chaining strategy. Each slot in the hash table array points to a list (array) of key-value pairs. This way, multiple elements can be stored in the same slot without overwriting each other.

Using a larger table size reduces the probability of collisions, thus ensuring that operations are close to O(1). However, it increases memory usage. Resizing the table dynamically balances memory usage and performance but involves a temporary performance hit during resizing.

Load factor of 0.7 is a trade-off between space and time efficiency.

Resizing by a factor of 1.5 is a compromise between memory usage jumps and time needed to rehash hole table
