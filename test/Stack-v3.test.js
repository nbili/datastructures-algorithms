let assert = require('assert')
let Stack = require('../src/Stack/Stack-v3')

let stack = new Stack()

describe('Stack-v3', function () {
    it('stack isEmpty should return true', function () {
        assert.equal(true, stack.isEmpty())
    })
    it('stack should return [5, 8] when push 5, 8', function () {
        stack.push(5)
        stack.push(8)
        assert.deepEqual([5, 8], stack.getStack())
    })
    it('stack should return 8 when peek', function () {
        assert.equal(8, stack.peek())
    })
    it('stack should return 3 when size', function () {
        stack.push(9)
        assert.equal(3, stack.size())
    })
    it('stack should return false when isEmpty', function () {
        assert.equal(false, stack.isEmpty())
    })
    it('stack should return [5] when pop', function () {
        stack.pop()
        stack.pop()
        assert.deepEqual([5], stack.getStack())
    })
    it('stack should return [] when clear', function () {
        stack.clear()
        assert.deepEqual([], stack.getStack())
        assert.equal(0, stack.size())
    })
})