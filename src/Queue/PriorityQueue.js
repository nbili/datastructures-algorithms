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
    }

})()