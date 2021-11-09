// https://leetcode-cn.com/problems/n-queens-ii/

// 要义：每个皇后都没有共行共列共斜线

function totalNQueens(n: number): number {
  const record = [];

  return process(0, record, n);
}

function process(i: number, record: number[], n: number) {
  // 终止
  if (n === i) {
    return 1;
  }

  let res = 0;

  for (let j = 0; j < n; j++) {
    if (isValid(record, i, j)) {
      record[i] = j;
      res += process(i + 1, record, n);
    }
  }

  return res;
}

function isValid(record: number[], i: number, j: number): boolean {
  for (let k = 0; k < i; k++) {
    if (j === record[k] || Math.abs(record[k] - j) === Math.abs(i - k)) {
      return false;
    }
  }

  return true;
}

export {};
