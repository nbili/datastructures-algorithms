export function sort(array: number[] | null) {
  if (!array) return null;

  if (array.length < 2) return array;

  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

function swap(array: number[], a: number, b: number) {
  if (a === b) return array;
  array[a] = array[a] ^ array[b];
  array[b] = array[a] ^ array[b];
  array[a] = array[a] ^ array[b];
}
