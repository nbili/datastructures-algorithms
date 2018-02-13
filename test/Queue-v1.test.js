let assert = require('assert')
let Queue = require('../src/Queue/Queue-v1')

let queue = new Queue()

describe('Queue-v1', function () {
    it('queue isEmpty should return true', function () {
        assert.equal(true, queue.isEmpty())
    })
    it('queue should return [5, 8] when push 5, 8', function () {
        queue.enqueue(5)
        queue.enqueue(8)
        assert.deepEqual([5, 8], queue.getQueue())
    })
    it('queue should return 5 when front', function () {
        assert.equal(5, queue.front())
    })
    it('queue should return 3 when size', function () {
        queue.enqueue(9)
        assert.equal(3, queue.size())
    })
    it('queue should return false when isEmpty', function () {
        assert.equal(false, queue.isEmpty())
    })
    it('queue should return [5] when dequeue', function () {
        queue.dequeue()
        queue.dequeue()
        assert.deepEqual([9], queue.getQueue())
    })
    it('queue should return [] when clear', function () {
        queue.clear()
        assert.deepEqual([], queue.getQueue())
        assert.equal(0, queue.size())
    })
})