let PriorityQueue = (function () {

    class QueueElement {
        constructor(element, priority) {
            this.element = element
            this.priority = priority
        }
    }

    const items = new WeakMap()

    class PriorityQueue {
        constructor() {
            items.set(this, [])
        }

        enqueue(element, priority) {
            const queueElement = new QueueElement(element, priority)

            const q = items.get(this)

            let added = false

            for (let i = 0; i < q.length; i++) {
                if (queueElement.priority < q[i].priority) {
                    q.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                q.push(queueElement)
            }
            items.set(this, q)
        }

        dequeue() {
            let q = items.get(this)
            let r = q.shift()
            items.set(this, q)
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

        print() {
            let q = items.get(this)
            for (let i = 0; i < q.length; i++) {
                console.log(`${q[i].element} - ${q[i].priority}`)
            }
        }

        // for test
        getQueue() {
            return items.get(this)
        }
    }
    return PriorityQueue
})()

module.exports = PriorityQueue