function LinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null

    this.append = function (element) {
        let node = new Node(element), current

        // 第一个节点
        if (head === null) {
            head = node
        } else {
            current = head
            // 找到最后一个节点
            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        length++
    }

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0
            // 在第一个节点插入
            if (position === 0) {
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }

            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function (position) {

    }

    this.remove = function (element) {

    }

    this.indexOf = function (element) {

    }

    this.isEmpty = function () {

    }

    this.size = function () {

    }

    this.getHead = function () {

    }

    this.toString = function () {
        let current = head, string = ''
        while (current) {
            string += current.element + (current.next ? ',' : '')
            current = current.next
        }
        return string
    }

    // for test
    this.print = function () {
        console.log(this.toString())
    }
}

module.exports = LinkedList