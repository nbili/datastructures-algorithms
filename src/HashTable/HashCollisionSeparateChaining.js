var LinkedList = require('../LinkedList/LinkedList-v2')

function HashTableSeparateChaining() {
    var table = []
    function ValuePair(key, value) {
        this.key = key
        this.value = value
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']'
        }
    }
    var loseloseHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    var hashCode = function (key) {
        return loseloseHashCode(key)
    }
    this.put = function (key, value) {
        var position = hashCode(key)
        if (table[position] == undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }
    this.get = function (key) {
        var position = hashCode(key)
        if (table[position] !== undefined && !table[position].isEmpty()) {
            var current = table[position].getHead()
            do {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            } while (current);
        }
        return undefined
    }
    this.remove = function (key) {
        var position = hashCode(key)
        if (table[position] !== undefined) {
            var current = table[position].getHead()
            do {
                if (current.element.key === key) {
                    table[position].remove(current.element)
                    if (table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current =  current.next
            } while (current);
        }
        return false
    }
    this.print = function () {
        var ary = []
        for (let i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                ary.push(table[i].toString())
            }
        }
        return ary
    }
}

module.exports = HashTableSeparateChaining