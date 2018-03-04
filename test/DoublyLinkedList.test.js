let DoublyLinkedList = require('../src/LinkedList/DoublyLinkedList')
let assert = require('assert')

let list = new DoublyLinkedList()

describe('DoublyLinkedList', function () {
    it('DoublyLinkedList isEmpty function', function () {
        assert.equal(true, list.isEmpty())
    })
    it('DoublyLinkedList append function', function () {
        list.append('a')
        list.append('b')
        list.append('c')
        list.append('d')
        list.append('e')
        list.append('f')
        assert.equal('a,b,c,d,e,f', list.toString())
    })
    it('DoublyLinkedList size function', function () {
        assert.equal(6, list.size())
    })
    it('DoublyLinkedList insert function', function () {
        list.insert(3, 'ii')
        assert.equal('a,b,c,ii,d,e,f', list.toString())
    })
    it('DoublyLinkedList removeAt function', function () {
        list.removeAt(3)
        assert.equal('a,b,c,d,e,f', list.toString())
    })
    it('DoublyLinkedList remove function', function () {
        list.remove('f')
        assert.equal('a,b,c,d,e', list.toString())
    })
    it('DoublyLinkedList indexOf function', function () {
        assert.equal(1, list.indexOf('b'))
    })
})