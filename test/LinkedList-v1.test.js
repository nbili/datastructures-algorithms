let LinkedList = require('../src/LinkedList/LinkedList-v1')
let assert = require('assert')

const list = new LinkedList

describe('LinkedList', function () {
    it('LinkedList isEmpty function', function () {
        assert.equal(true, list.isEmpty())
    })
    it('LinkedList append function', function () {
        list.append('a')
        list.append('b')
        list.append('c')
        list.append('d')
        list.append('e')
        list.append('f')
        assert.equal('a,b,c,d,e,f', list.toString())
    })
    it('LinkedList size function', function () {
        assert.equal(6, list.size())
    })
    it('LinkedList insert function', function () {
        list.insert(3, 'ii')
        assert.equal('a,b,c,ii,d,e,f', list.toString())
    })
    it('LinkedList removeAt function', function () {
        list.removeAt(3)
        assert.equal('a,b,c,d,e,f', list.toString())
    })
    it('LinkedList remove function', function () {
        list.remove('f')
        assert.equal('a,b,c,d,e', list.toString())
    })
    it('LinkedList indexOf function', function () {
        assert.equal(1, list.indexOf('b'))
    })
})