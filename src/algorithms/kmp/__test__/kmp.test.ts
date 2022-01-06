import { kmp } from "../kmp";

describe("kmp pattern", () => {
  it("case match", () => {
    const string = "abcabfabcdabcabcef";
    const substring = "abcabc";

    expect(kmp(string, substring)).toBe(true);
  });

  it("case no match", () => {
    const string = "abcabfabcdabcabceef";
    const substring = "abcabck";

    expect(kmp(string, substring)).toBe(false);
  });
});
