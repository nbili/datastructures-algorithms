export function kmp(string: string, substring: string) {
  const pattern = buildPattern(substring);

  return doesMatch(string, substring, pattern);
}

function buildPattern(substring: string): number[] {
  const pattern = new Array(substring.length).fill(-1);

  let j = 0;
  let i = 1;

  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      pattern[i] = j;
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }

  return pattern;
}

function doesMatch(
  string: string,
  substirng: string,
  pattern: number[]
): boolean {
  let i = 0;
  let j = 0;

  while (i <= string.length) {
    if (string[i] === substirng[j]) {
      if (j === substirng.length - 1) return true;
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }

  return false;
}
