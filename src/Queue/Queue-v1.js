function Queue() {
    let items = []

    this.enqueue = function (element) {
        items.push(element)
    }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0]
    }
    this.isEmpty = function () {
        return items.length === 0
    }
    this.size = function () {
        return items.length
    }
    this.clear = function () {
        items = []
    }
    this.toString = function () {
        return items.toString()
    }

    // for test
    this.getQueue = function () {
        return items
    }
}

module.exports = Queue