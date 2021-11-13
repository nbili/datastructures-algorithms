// 打印字符串的全部子序列

export function getSubs(str: string) {
  const res = [];
  const path = "";

  process(str, 0, res, path);

  return res;
}

function process(str: string, index: number, res: string[], path: string) {
  if (index === str.length) {
    if (path.length === 0) return;
    res.push(path);
    return;
  }

  process(str, index + 1, res, path);

  process(str, index + 1, res, (path += str[index]));
}

// 打印字符串的

export function getAll(str: string) {
  const res = [];

  process2(str, 0, res);

  return res;
}

function process2(str: string, index: number, res: string[]) {
  if (index === str.length) {
    res.push(str);
  }

  for (let j = index; j < str.length; j++) {
    str = swap(str, index, j);

    process2(str, index + 1, res);

    str = swap(str, j, index);
  }

  function swap(str: string, a: number, b: number) {
    const strAry = str.split("");
    const temp = strAry[a];
    strAry[a] = strAry[b];
    strAry[b] = temp;

    return strAry.join("");
  }
}

export {};
