// 给定两个节点 二叉🌲的最近公共祖先

//           1 
//          / \
//         2   3 
//        /\  / \ 
//       4 5 6  7
//        /\ 
//       8 9

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const head = new Node(1)
head.left = new Node(2)
head.right = new Node(3)
head.left.left = new Node(4)
head.left.right = new Node(5)
head.right.left = new Node(6)
head.right.right = new Node(7)
head.left.right.left = new Node(8)
head.left.right.right = new Node(9)

function getLowestAncestor(head, x, y) {
  if (head == null) {
    return null
  }
  const parentMap = new Map()
  parentMap.set(head, null)
  fillParentMap(head, parentMap)
  const xSet = new Set()
  let cur = x
  xSet.add(cur)
  while (parentMap.get(cur)) {
    cur = parentMap.get(cur)
    xSet.add(cur)
  }
  cur = y
  while (!xSet.has(cur)) {
    cur = parentMap.get(cur)
  }
  return cur
}

function fillParentMap(head, parentMap) {
  if (head.left) {
    parentMap.set(head.left, head)
    fillParentMap(head.left, parentMap)
  }
  if (head.right) {
    parentMap.set(head.right, head)
    fillParentMap(head.right, parentMap)
  }
}

console.log(getLowestAncestor(head, head.left.left, head.left.right.right).val)
