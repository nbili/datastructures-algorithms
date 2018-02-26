let LinkedList = require('../src/LinkedList/LinkedList-v1')

const list = new LinkedList
list.append('a')
list.append('b')
list.append('c')
list.append('d')
list.append('e')

list.print()

list.insert(2, 'i')

// list.removeAt(0)
// list.removeAt(1)

list.remove('d')

list.print()