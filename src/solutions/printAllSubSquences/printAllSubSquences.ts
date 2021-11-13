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

export {};
