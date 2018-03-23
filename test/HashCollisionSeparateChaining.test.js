let HashCollisionSeparateChaining = require('../src/HashTable/HashCollisionSeparateChaining')
let assert = require('assert')

let hashCollisionSeparateChaining = new HashCollisionSeparateChaining()
hashCollisionSeparateChaining.put('Gandalf', 'gandalf@email.com')
hashCollisionSeparateChaining.put('John', 'johnsnow@email.com')
hashCollisionSeparateChaining.put('Tyrion', 'tyrion@email.com')
hashCollisionSeparateChaining.put('Aaron', 'aaron@email.com')
hashCollisionSeparateChaining.put('Donnie', 'donnie@email.com')
hashCollisionSeparateChaining.put('Ana', 'ana@email.com')
hashCollisionSeparateChaining.put('Jonathan', 'jonathan@email.com')
hashCollisionSeparateChaining.put('Jamie', 'jamie@email.com')
hashCollisionSeparateChaining.put('Sue', 'sue@email.com')
hashCollisionSeparateChaining.put('Mindy', 'mindy@email.com')
hashCollisionSeparateChaining.put('Paul', 'paul@email.com')
hashCollisionSeparateChaining.put('Nathan', 'nathan@email.com')

describe('HashCollisionSeparateChaining', function () {
    it('HashCollisionSeparateChaining put function', function () {
        assert.deepEqual([
            '[Jonathan-jonathan@email.com],[Jamie-jamie@email.com],[Sue-sue@email.com]',
            '[Nathan-nathan@email.com]',
            '[Donnie-donnie@email.com],[Ana-ana@email.com]',
            '[Tyrion-tyrion@email.com],[Aaron-aaron@email.com]',
            '[Gandalf-gandalf@email.com]',
            '[John-johnsnow@email.com]',
            '[Mindy-mindy@email.com],[Paul-paul@email.com]'],
            hashCollisionSeparateChaining.print())
    })
    it('HashCollisionSeparateChaining remove function', function () {
        assert.equal(true, hashCollisionSeparateChaining.remove('Jamie'))
    })
    it('HashCollisionSeparateChaining get function', function () {
        assert.equal(undefined, hashCollisionSeparateChaining.get('Jamie'))
    })
})