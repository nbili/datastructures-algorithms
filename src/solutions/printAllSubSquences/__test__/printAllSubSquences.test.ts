import { getAll, getSubs } from "../printAllSubSquences";

describe("getSubs", () => {
  it("get subs", () => {
    const str = "abc";

    expect(getSubs(str).toString()).toBe("c,b,bc,a,ac,ab,abc");
  });

  it("get alls", () => {
    const str = "abc";

    expect(getAll(str).toString()).toBe("abc,acb,bac,bca,cba,cab");
  });
});
