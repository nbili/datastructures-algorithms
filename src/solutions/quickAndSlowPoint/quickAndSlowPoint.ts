// quick slow list

export class Node {
  public value: number;
  public next: Node;

  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Node2 {
  public value: number;
  public random: Node2;
  public next: Node2;
  constructor(val) {
    this.value = val;
    this.random = null;
    this.next = null;
  }
}

export default class LinkList {
  public static midOrUpMidNode(head: Node): Node {
    if (head === null || head.next === null || head.next.next === null)
      return head;
    // list > 3

    let slow = head.next;
    let quick = head.next.next;

    while (quick.next !== null && quick.next.next !== null) {
      slow = slow.next;
      quick = quick.next.next;
    }

    return slow;
  }

  public static isPalindrome(head: Node) {
    const stack = [];

    let cur = head;
    while (cur !== null) {
      stack.push(cur);
      cur = cur.next;
    }

    while (head !== null) {
      if (head.value !== stack.pop().value) {
        return false;
      }
      head = head.next;
    }

    return true;
  }

  // https://leetcode.com/problems/copy-list-with-random-pointer/
  public static copyRandomList(head: Node2) {
    const map = new WeakMap();

    let cur = head;

    while (cur !== null) {
      map.set(cur, new Node2(cur.value));

      cur = cur.next;
    }

    cur = head;

    while (cur !== null) {
      map.get(cur).next = map.get(cur.next);
      map.get(cur).random = map.get(cur.random);

      cur = cur.next;
    }

    return map.get(head);
  }
}
