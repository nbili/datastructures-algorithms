let Queue = (function () {
    const items = new WeakMap()

    class Queue {

        constructor() {
            items.set(this, [])
        }

        enqueue(element) {
            let q = items.get(this)
            q.push(element)
        }

        dequeue() {
            let q = items.get(this)
            let r = q.shift()
            return r
        }

        front() {
            let q = items.get(this)
            return q[0]
        }

        isEmpty() {
            return items.get(this).length === 0
        }

        size() {
            let q = items.get(this)
            return q.length
        }

        clear() {
            items.set(this, [])
        }

        toString() {
            return items.get(this).toString()
        }

        // for test
        getQueue() {
            return items.get(this)
        }
    }

    return Queue
})()

module.exports = Queue