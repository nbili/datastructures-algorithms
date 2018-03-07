function Set() {
    let items = {}

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        }
        return true
    }

    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }

    this.has = function (value) {
        return items.hasOwnProperty(value)
    }

    this.clear = function () {
        items = {}
    }

    this.size = function () {
        return Object.keys(items).length
    }

    this.values = function () {
        let values = []
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function () {
        return items
    }

    this.union = function (otherSet) {
        let unionSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }

    this.intersection = function (otherSet) {
        let intersectionSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet
    }

    this.difference = function (otherSet) {
        let differenceSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }

        return differenceSet
    }

    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        } else {
            let values = this.values()
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}

module.exports = Set