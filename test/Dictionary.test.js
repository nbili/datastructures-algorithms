let Dictionary = require('../src/Dictionary/Dictionary')
let assert = require('assert')

const dic = new Dictionary

describe('Dictionary', function () {
    it('Dictionary size function', function () {
        assert.equal(0, dic.size())
    })
    it('Dictionary set function', function () {
        dic.set('a', 1)
        dic.set('b', 2)
        dic.set('c', 3)
        dic.set('d', 4)
        dic.set('e', 5)
        dic.set('f', 6)
        assert.deepEqual({
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4,
            'e': 5,
            'f': 6
        }, dic.getItems())
    })
    it('Dictionary delete function', function () {
        dic.delete('b')
        dic.delete('c')
        dic.delete('d')
        assert.deepEqual({
            'a': 1,
            'e': 5,
            'f': 6
        }, dic.getItems())
    })
    it('Dictionary has function', function () {
        assert.equal(true, dic.has('a'))
    })
    it('Dictionary set function', function () {
        assert.equal(1, dic.get('a'))
    })
    it('Dictionary values function', function () {
        assert.deepEqual([1, 5, 6], dic.values())
    })
})