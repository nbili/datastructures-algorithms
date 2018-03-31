let SortingSearchingAlgorithms = require('../src/Sort/SortingSearchingAlgorithms')
let assert = require('assert')

function createNonSortedArray(size) {
    var sorter = new SortingSearchingAlgorithms();

    for (var i = size; i > 0; i--) {
        sorter.insert(i);
    }

    return sorter
}

function createRandomNonSortedArray() {
    var array = new ArrayList();

    array.insert(3);
    array.insert(5);
    array.insert(1);
    array.insert(6);
    array.insert(4);
    array.insert(7);
    array.insert(2);

    return array;
}

describe('SortingSearchingAlgorithms', function () {
    it('bubbleSort', function () {
        var sorter = createNonSortedArray(7)
        sorter.bubbleSort()
        assert.deepEqual([1, 2, 3, 4, 5, 6, 7], sorter.array())
    })
})

describe('SortingSearchingAlgorithms', function () {
    it('selectionSort', function () {
        var sorter = createNonSortedArray(8)
        sorter.selectionSort()
        assert.deepEqual([1, 2, 3, 4, 5, 6, 7], sorter.array())
    })
})
