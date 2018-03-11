function HashTable() {
    var table = []

    var loseloseHashCode = function (key) {
        var hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    var djb2HashCode = function (key) {
        var hash = 5381
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013
    }

    var hashCode = function (key) {
        return loseloseHashCode(key)
    }

    this.put = function (key, value) {
        var position = hashCode(key)
        table[position] = value
    }

    this.get = function (key) {
        return table[hashCode(key)]
    }

    this.remove = function (key) {
        table[hashCode(key)] = undefined
    }

}