import { getMaxValue } from "../knapsack";

describe("knapsack", () => {
  it("getMaxValue", () => {
    const w = [2, 45, 23, 55];
    const v = [33, 3, 4, 43];

    expect(getMaxValue(w, v, 30)).toBe(37);
  });
});
