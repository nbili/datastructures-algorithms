let DoublyLinkedList = require('../src/LinkedList/DoublyLinkedList')
let assert = require('assert')

let list = new DoublyLinkedList()
list.append('a')
list.append('b')
list.append('c')

console.log(list.toString())