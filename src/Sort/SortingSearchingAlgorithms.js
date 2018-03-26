function ArrayList() {
    var array = []
    this.insert = function (item) {
        array.push(item)
    }
    var swap = function (array, index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }
    this.toString = function () {
        return array.join()
    }
    this.array = function () {
        return array
    }

    // BubbleSort
    this.bubbleSort = function () {
        var length = array.length
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1)
                }
            }
        }
    }

    // SelectionSort
    this.selectionSort = function () {
        var length = this.length,
            indexMin
        for (var i = 0; i < length - 1; i++) {
            indexMin = i
            for (var j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin)
            }
        }
    }
}