export function sort(array: number[] | null) {
  if (!array) return null;

  if (array.length < 2) return array;

  process(array, 0, array.length - 1);

  return array;
}

function netherlandsFlag(array: number[], L: number, R: number) {
  if (L > R) return [-1, -1] as const;

  if (L === R) return [L, R] as const;

  let less = L - 1,
    more = R,
    index = L;

  while (index < more) {
    if (array[index] === array[R]) index++;
    else if (array[index] < array[R]) {
      swap(array, index++, ++less);
    } else {
      swap(array, index, --more);
    }
  }

  // <[R] =[R] >[R]
  swap(array, more, R);

  return [less + 1, more] as const;
}

function process(array: number[], L: number, R: number) {
  if (L > R) return;

  swap(array, ~~(L + Math.random() * (R - L + 1)), R);
  const [equalAreaL, equalAreaR] = netherlandsFlag(array, L, R);

  process(array, L, equalAreaL - 1);
  process(array, equalAreaR + 1, R);
}

function swap(array: number[], a: number, b: number) {
  if (a === b) return array;
  array[a] = array[a] ^ array[b];
  array[b] = array[a] ^ array[b];
  array[a] = array[a] ^ array[b];
}
