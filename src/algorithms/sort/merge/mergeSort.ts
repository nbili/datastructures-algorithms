export function sort(array: number[] | null) {
  if (!array) return null;

  if (array.length < 2) return array;

  process(array, 0, array.length - 1);

  return array;
}

function process(array: number[], L: number, R: number) {
  if (L === R) return;

  let mid = L + ((R - L) >> 1);

  process(array, L, mid);
  process(array, mid + 1, R);

  merge(array, L, mid, R);
}

function merge(array: number[], L: number, M: number, R: number) {
  let help = [];

  let i = 0,
    p1 = L,
    p2 = M + 1;

  while (p1 <= M && p2 <= R) {
    help[i++] = array[p1] <= array[p2] ? array[p1++] : array[p2++];
  }

  while (p1 <= M) {
    help[i++] = array[p1++];
  }

  while (p2 <= R) {
    help[i++] = array[p2++];
  }

  for (let i = 0; i < help.length; i++) {
    array[L + i] = help[i];
  }
}
