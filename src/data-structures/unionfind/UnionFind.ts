class Node {
  constructor(public value) {}
}

export default class UnionFind {
  public nodes: Map<string, Node>;
  public parents: Map<Node, Node>;
  public sizeMap: Map<Node, number>;

  constructor(values: string[]) {
    this.nodes = new Map();
    this.parents = new Map();
    this.sizeMap = new Map();

    for (let cur of values) {
      const node = new Node(cur);

      this.nodes.set(cur, node);
      this.parents.set(node, node);
      this.sizeMap.set(node, 1);
    }
  }

  private findFather(cur: Node) {
    const path = [];

    while (cur !== this.parents.get(cur)) {
      path.push(cur);
      cur = this.parents.get(cur);
    }

    // 打平路径优化
    while (!path.length) {
      const node = path.pop();
      this.parents.set(node, cur);
    }

    return cur;
  }

  public isSameSet(a: string, b: string) {
    return (
      this.findFather(this.nodes.get(a)) === this.findFather(this.nodes.get(b))
    );
  }

  public union(a: string, b: string) {
    const aHead = this.findFather(this.nodes.get(a));
    const bHead = this.findFather(this.nodes.get(b));

    if (aHead !== bHead) {
      const aSetSize = this.sizeMap.get(aHead);
      const bSetSize = this.sizeMap.get(bHead);

      if (aSetSize <= bSetSize) {
        this.parents.set(bHead, aHead);
        this.sizeMap.set(aHead, bSetSize + aSetSize);
        this.sizeMap.delete(bHead);
      } else {
        this.parents.set(aHead, bHead);
        this.sizeMap.set(bHead, bSetSize + aSetSize);
        this.sizeMap.delete(aHead);
      }
    }
  }
}
