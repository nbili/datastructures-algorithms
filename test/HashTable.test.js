let HashTable = require('../src/HashTable/HashTable')
let assert = require('assert')


const hash = new HashTable

hash.put('a', 1)
hash.put('b', 2)
hash.put('c', 3)
hash.print()