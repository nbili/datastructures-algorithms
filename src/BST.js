class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

//           1 
//          / \
//         2   3 
//        /\  / \ 
//       4 5 6  7

const head = new Node(1)
head.left = new Node(2)
head.right = new Node(3)
head.left.left = new Node(4)
head.left.right = new Node(5)
head.right.left = new Node(6)
head.right.right = new Node(7)

function pre(head) {
  if (head == null) {
    return
  }
  console.log(head.val)
  pre(head.left)
  pre(head.right)
}

console.log('==========pre=========')
pre(head)

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

function pos(head) {
  if (head == null) {
    return
  }
  pos(head.left)
  pos(head.right)
  console.log(head.val)
}

console.log('==========pos=========')
pos(head)

// 迭代实现

function pre2(head) {
  if (head != null) {
    const stack = []
    stack.push(head)
    while (stack.length) {
      const p = stack.pop()
      console.log(p.val)
      if (p.right)
        stack.push(p.right)
      if (p.left)
        stack.push(p.left)
    }
  }
}

console.log('==========pre2=========')
pre2(head)

function ino2(head) {
  if (head != null) {
    const stack = []
    while (stack.length || head != null) {
      if (head != null) {
        stack.push(head)
        head = head.left
      } else {
        head = stack.pop()
        console.log(head.val)
        head = head.right
      }
    }
  }
}

console.log('==========ino2=========')
ino2(head)

function pos2(head) {
  if (head != null) {
    const stack1 = []
    const stack2 = []
    stack1.push(head)
    while (stack1.length) {
      const p = stack1.pop()
      stack2.push(p)
      if (p.left)
        stack1.push(p.left)
      if (p.right)
        stack1.push(p.right)
    }
    while (stack2.length) {
      console.log(stack2.pop().val)
    }
  }
}

console.log('==========pos2=========')
pos2(head)

// 层序遍历

function level(head) {
  if (head != null) {
    const queue = []
    queue.push(head)
    while (queue.length) {
      const c = queue.shift()
      console.log(c.val)
      if (c.left)
        queue.push(c.left)
      if (c.right)
        queue.push(c.right)
    }
  }
}

console.log('==========level=========')
level(head)
