// https://leetcode-cn.com/problems/hanota-lcci/

function hanota(A: number[], B: number[], C: number[]): void {
  const N = A.length;
  process(N, A, C, B);
}

function process(n: number, from: number[], to: number[], other: number[]) {
  if (n === 1) {
    return to.push(from.pop());
  } else {
    process(n - 1, from, other, to);

    to.push(from.pop());

    process(n - 1, other, to, from);
  }
}

export {};
