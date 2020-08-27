// 获取🌲的最大宽度
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

// 使用 hashMap
function getMaxWidth(head) {
  if (head == null) {
    return
  }
  const queue = []
  queue.push(head)

  const levelMap = new Map()
  levelMap.set(head, 1)

  let curLevel = 1
  let curLevelNodes = 0
  let maxWidth = 0

  while (queue.length) {
    const cur = queue.shift()
    let curNodeLevel = levelMap.get(cur)

    if (cur.left) {
      levelMap.set(cur.left, curNodeLevel + 1)
      queue.push(cur.left)
    }
    if (cur.right) {
      levelMap.set(cur.right, curNodeLevel + 1)
      queue.push(cur.right)
    }
    if (curNodeLevel == curLevel) {
      curLevelNodes++
    } else {
      maxWidth = Math.max(maxWidth, curLevelNodes)
      curLevel++
      curLevelNodes = 1
    }
    maxWidth = Math.max(maxWidth, curLevelNodes)
  }

  return maxWidth
}

console.log(getMaxWidth(head))

