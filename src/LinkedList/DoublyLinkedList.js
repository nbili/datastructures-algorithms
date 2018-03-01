// 双向链表
let DoublyLinkedList = (function () {
    class Node {
        constructor(element) {
            this.element = element
            this.next = null
            this.prev = null
        }
    }

    const length = new WeakMap()
    // 头节点引用
    const head = new WeakMap()
    // 末尾节点引用
    const tail = new WeakMap()

    class DoublyLinkedList {
        constructor() {
            length.set(this, 0)
            head.set(this, null)
            tail.set(this, null)
        }

        append(element) {
            let node = new Node(element),
                current,
                _tail

            if (this.getHead() === null) {
                // 空链表
                head.set(this, node)
                tail.set(this, node)
            } else {
                _tail = this.getTail()
                _tail.next = node
                node.prev = _tail
                tail.set(this, node)
            }
            let len = this.size()
            len++
            length.set(this, len)
        }

        insert(position, element) {
            if (position >= 0 && position <= this.size()) {
                let node = new Node(element),
                    current = this.getHead(),
                    previous,
                    index = 0

                if (position === 0) {
                    // 第一个节点
                    if (!this.getHead()) {
                        head.set(this, node)
                        tail.set(this, node)
                    } else {
                        node.next = current
                        current.prev = node
                        head.set(this, node)
                    }
                } else if (position === this.size()) {
                    // 最后一个节点
                    current = tail
                    current.next = node
                    node.prev = current
                    tail.set(this, node)
                } else {
                    while (index++ < position) {
                        previous = current
                        current = current.next
                    }
                    node.next = current
                    previous.next = node

                    current.prev = node
                    node.prev = previous
                }

                let len = this.size()
                len++
                length.set(this, len)

                return true
            } else {
                return false
            }
        }

        removeAt(position) {
            if (position > -1 && position < this.size()) {
                let _head = this.getHead(),
                    _tail = this.getTail(),
                    current = _head,
                    previous,
                    index = 0
                if (position === 0) {
                    _head = current.next

                    if (this.size() === 1) {
                        _tail = null
                    } else {
                        _head.prev = null
                    }

                } else if (position === this.size() - 1) {
                    current = _tail
                    _tail = current.prev
                    _tail.next = null
                } else {
                    while (index++ < position) {
                        previous = current
                        current = current.next
                    }
                    previous.next = current.next
                    current.next.prev = previous
                }

                head.set(this, _head)
                tail.set(this, _tail)

                let len = this.size()
                len--
                length.set(this, len)
            } else {
                return null
            }
        }

        remove(position) {

        }

        indexOf(element) {

        }

        isEmpty() {
            return this.size() === 0
        }

        size() {
            return length.get(this)
        }

        toString() {

        }

        inverseToString() {

        }

        getHead() {
            return head.get(this)
        }

        getTail() {
            return tail.get(this)
        }
    }

    return DoublyLinkedList
})()