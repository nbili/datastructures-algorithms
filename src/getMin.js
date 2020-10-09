// 实现一个特殊的栈，在实现栈的基本功能的基础上，再实现返回栈中最小元素的操作

// 要求 O(1)

class Stack {
  constructor() {
    this.stackData = []
    this.stackMin = []
  }

  push(newNum) {
    if (this.stackMin.length === 0) {
      this.stackMin.push(newNum)
    } else if (newNum < this.getMin()) {
      this.stackMin.push(newNum)
    } else {
      let newMin = this.stackMin[this.stackMin.length - 1]
      this.stackMin.push(newMin)
    }
    this.stackData.push(newNum)
  }

  pop() {
    if (this.stackData.length === 0) {
      throw new Error('stack is empty')
    }
    this.stackMin.pop()
    return this.stackData.pop()
  }

  getMin() {
    if (this.stackMin.length === 0) {
      throw new Error('stack is empty')
    }
    return this.stackMin[this.stackMin.length - 1]
  }
}

const stack = new Stack()

stack.push(3)
stack.push(4)
stack.push(5)
stack.push(1)
stack.push(2)
stack.push(1)

stack.pop()
stack.pop()
stack.pop()

console.log(stack.getMin())
