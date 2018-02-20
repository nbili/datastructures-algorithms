let assert = require('assert')
let PriorityQueue = require('../src/Queue/PriorityQueue')

let priorityQueue = new PriorityQueue()

describe('priorityQueue', function () {
    it('queue isEmpty should return true', function () {
        assert.equal(true, priorityQueue.isEmpty())
    })

})
