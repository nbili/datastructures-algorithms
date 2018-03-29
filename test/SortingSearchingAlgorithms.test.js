let SortingSearchingAlgorithms = require('../src/Sort/SortingSearchingAlgorithms')
let assert = require('assert')

function createNonSortedArray(size) {
    var array = new SortingSearchingAlgorithms();

    for (var i = size; i > 0; i--) {
        array.insert(i);
    }

    return array;
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

let sorter = new SortingSearchingAlgorithms

describe('SortingSearchingAlgorithms', function () {
    it('bubbleSort', function () {
        var ary = createNonSortedArray(7)
        ary.bubbleSort()
        assert.deepEqual([1, 2, 3, 4, 5, 6, 7], ary.array)
    })
})
