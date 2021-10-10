export function sort(array: number[] | null) {
  if (!array) return null;

  if (array.length < 2) return array;

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    // array[i ... n) 中的最小值
    for (let j = i; j < array.length; j++) {
      if (array[j] - array[minIndex] < 0) {
        minIndex = j;
      }
    }

    swap(array, i, minIndex);
  }

  return array;
}

function swap(array: number[], a: number, b: number) {
  if (a === b) return array;
  array[a] = array[a] ^ array[b];
  array[b] = array[a] ^ array[b];
  array[a] = array[a] ^ array[b];
}
