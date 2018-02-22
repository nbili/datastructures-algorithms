let assert = require('assert')
let PriorityQueue = require('../src/Queue/PriorityQueue')

let priorityQueue = new PriorityQueue()

describe('priorityQueue', function () {
    it('queue isEmpty should return true', function () {
        assert.equal(true, priorityQueue.isEmpty())
    })
    it('queue should return [8, 5] when push 5(priority is 2), 8(priority is 1)', function () {
        priorityQueue.enqueue(5, 2)
        priorityQueue.enqueue(8, 1)
        assert.deepEqual([
            {
                'element': 8,
                'priority': 1
            }, {
                'element': 5,
                'priority': 2
            }
        ], priorityQueue.getQueue())
    })
})
