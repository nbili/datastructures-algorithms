let HashTable = require('../src/HashTable/HashTable')
let assert = require('assert')


const hash = new HashTable

hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')

describe('HashTable', function () {
    it('HashTable put function', function () {
        assert.deepEqual([
            '5: sue@email.com',
            '10: nathan@email.com',
            '13: ana@email.com',
            '16: aaron@email.com',
            '19: gandalf@email.com',
            '29: johnsnow@email.com',
            '32: paul@email.com'], hash.print())
    })
    it('HashTable get function', function () {
        let t = hash.get('Gandalf')
        assert.equal(t, 'gandalf@email.com')
    })
    it('HashTable remove function', function () {
        hash.remove('Nathan')
        assert.deepEqual([
            '5: sue@email.com',
            '13: ana@email.com',
            '16: aaron@email.com',
            '19: gandalf@email.com',
            '29: johnsnow@email.com',
            '32: paul@email.com'], hash.print())
    })
})