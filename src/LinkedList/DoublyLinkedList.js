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

        }

        insert(position, element) {
            if (position >= 0 && position <= this.size()) {

            }
        }

        removeAt(position) {

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