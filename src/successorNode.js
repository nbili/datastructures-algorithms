// 给定X节点获取🌲的后继节点

// 暴力法采用中序遍历 O(N)
// 非暴力方法 O(K)
// 1. 有右树找右树最左节点
// 2. 没右树找parent

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
    this.parent = null
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

head.parent = null
head.left.parent = head
head.right.parent = head
head.left.left.parent = head.left
head.left.right.parent = head.left
head.right.left.parent = head.right
head.right.right.parent = head.right
head.left.right.left.parent = head.left.right
head.left.right.right.parent = head.left.right


function ino(head) {
  if (head == null) {
    return
  }
  ino(head.left)
  console.log(head.val)
  ino(head.right)
}

console.log('==========ino=========')
ino(head)

function getSuccessorNode(node) {
  if (node == null) {
    return node
  }
  if (node.right != null) {
    return getLeftMost(node.right)
  } else {
    let parent = node.parent
    while (parent != null && parent.right == node) {
      node = parent
      parent = node.parent
    }
    return parent
  }
}

function getLeftMost(node) {
  if (node == null) {
    return node
  }
  while (node.left != null) {
    node = node.left
  }
  return node
}

console.log('=========find==========')
const test = head.right.right
console.log(getSuccessorNode(test))
