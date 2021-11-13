// 0 - 1 背包问题

export function getMaxValue(w: number[], v: number[], bag: number) {
  if (w === null || v === null || w.length !== v.length || w.length === 0) {
    return 0;
  }

  return process(w, v, 0, bag);
}

function process(w: number[], v: number[], index: number, rest: number) {
  if (rest < 0) {
    return -1;
  }

  if (index === w.length) {
    return 0;
  }

  const p1 = process(w, v, index + 1, rest);

  let p2 = 0;

  const next = process(w, v, index + 1, rest - w[index]);

  if (next !== -1) {
    p2 = v[index] + next;
  }

  return Math.max(p1, p2);
}

