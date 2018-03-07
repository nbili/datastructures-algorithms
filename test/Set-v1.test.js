let Set = require('../src/Set/Set-v1')
let assert = require('assert')

let set = new Set()

describe('Set', function () {
    it('Set size function', function () {
        assert.equal(0, set.size())
    })
    it('Set getItems function', function () {
        assert.deepEqual({}, set.getItems())
    })
    it('Set add function', function () {
        set.add('a')
        set.add(1)
        set.add({ a: 1 })
        assert.deepEqual({
            '1': 1,
            a: 'a',
            '[object Object]': { a: 1 }
        }, set.getItems())
    })
    it('Set delete function', function () {
        set.delete('a')
        assert.deepEqual({
            '1': 1,
            '[object Object]': { a: 1 }
        }, set.getItems())
    })
    it('Set has function', function () {
        assert.equal(true, set.has('1'))
    })
    it('Set clear function', function () {
        set.clear()
        assert.deepEqual({}, set.getItems())
    })
    it('Set union function', function () {
        let set1 = new Set()
        set1.add(1)
        set1.add(2)
        set1.add(3)
        let set2 = new Set()
        set2.add(4)
        set2.add(5)
        set2.add(6)
        let uSet = set1.union(set2)
        assert.deepEqual(
            {
                '1': 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
                '6': 6
            },
            uSet.getItems()
        )
    })
    it('Set intersection function', function () {
        let set1 = new Set()
        set1.add(1)
        set1.add(2)
        set1.add(3)
        set1.add(4)
        let set2 = new Set()
        set2.add(4)
        set2.add(5)
        set2.add(6)
        let uSet = set1.intersection(set2)
        assert.deepEqual(
            {
                '4': 4
            },
            uSet.getItems()
        )
    })
    it('Set difference function', function () {
        let set1 = new Set()
        set1.add(1)
        set1.add(2)
        let set2 = new Set()
        set2.add(2)
        set2.add(6)
        let uSet = set1.difference(set2)
        assert.deepEqual(
            {
                '1': 1
            },
            uSet.getItems()
        )
    })
    it('Set subset function', function () {
        let set1 = new Set()
        set1.add(1)
        set1.add(2)
        let set2 = new Set()
        set2.add(2)
        let flag = set2.subset(set1)
        assert.equal(true, flag)
    })
})