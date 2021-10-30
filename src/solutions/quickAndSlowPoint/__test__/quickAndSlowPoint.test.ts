import LinkList, { Node } from "../quickAndSlowPoint";

describe("LinkList", () => {
  it("get mid element 1", () => {
    const test = new Node(0);
    test.next = new Node(1);
    test.next.next = new Node(2);
    test.next.next.next = new Node(3);
    test.next.next.next.next = new Node(4);
    test.next.next.next.next.next = new Node(5);

    expect(LinkList.midOrUpMidNode(test).value).toBe(2);
  });

  it("get mid element 2", () => {
    const test = new Node(0);
    test.next = new Node(1);
    test.next.next = new Node(2);
    test.next.next.next = new Node(3);
    test.next.next.next.next = new Node(4);

    expect(LinkList.midOrUpMidNode(test).value).toBe(2);
  });

  it("is palindrome list", () => {
    const test = new Node(3);
    test.next = new Node(2);
    test.next.next = new Node(1);
    test.next.next.next = new Node(2);
    test.next.next.next.next = new Node(3);

    expect(LinkList.isPalindrome(test)).toBe(true);
  });

  it("is palindrome list", () => {
    const test = new Node(3);
    test.next = new Node(2);
    test.next.next = new Node(1);
    test.next.next.next = new Node(4);
    test.next.next.next.next = new Node(3);

    expect(LinkList.isPalindrome(test)).toBe(false);
  });
});
