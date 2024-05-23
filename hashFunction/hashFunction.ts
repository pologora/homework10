export function djb2Hash(str: string, size: number): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = hash * 33 + str.charCodeAt(i);
  }
  return hash % size;
}
