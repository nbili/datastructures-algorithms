let HashLinearProbing = require('../src/HashTable/HashCollisionLinearProbing')
let assert = require('assert')

var hashLinearProbing = new HashLinearProbing();

hashLinearProbing.put('Gandalf', 'gandalf@email.com');
hashLinearProbing.put('John', 'johnsnow@email.com');
hashLinearProbing.put('Tyrion', 'tyrion@email.com');
hashLinearProbing.put('Aaron', 'aaron@email.com');
hashLinearProbing.put('Donnie', 'donnie@email.com');
hashLinearProbing.put('Ana', 'ana@email.com');
hashLinearProbing.put('Jonathan', 'jonathan@email.com');
hashLinearProbing.put('Jamie', 'jamie@email.com');
hashLinearProbing.put('Sue', 'sue@email.com');
hashLinearProbing.put('Mindy', 'mindy@email.com');
hashLinearProbing.put('Paul', 'paul@email.com');
hashLinearProbing.put('Nathan', 'nathan@email.com');

describe('HashCollisionLinearProbing', function () {
    it('HashCollisionLinearProbing put function', function () {
        assert.deepEqual(['[Jonathan-jonathan@email.com]',
            '[Jamie-jamie@email.com]',
            '[Sue-sue@email.com]',
            '[Nathan-nathan@email.com]',
            '[Donnie-donnie@email.com]',
            '[Ana-ana@email.com]',
            '[Tyrion-tyrion@email.com]',
            '[Aaron-aaron@email.com]',
            '[Gandalf-gandalf@email.com]',
            '[John-johnsnow@email.com]',
            '[Mindy-mindy@email.com]',
            '[Paul-paul@email.com]'],
            hashLinearProbing.print())
    })
    it('HashCollisionLinearProbing get function', function () {
        assert.equal('johnsnow@email.com', hashLinearProbing.get('John'))
    })
    it('HashCollisionLinearProbing remove function', function () {
        hashLinearProbing.remove('John')
        assert.deepEqual(['[Jonathan-jonathan@email.com]',
            '[Jamie-jamie@email.com]',
            '[Sue-sue@email.com]',
            '[Nathan-nathan@email.com]',
            '[Donnie-donnie@email.com]',
            '[Ana-ana@email.com]',
            '[Tyrion-tyrion@email.com]',
            '[Aaron-aaron@email.com]',
            '[Gandalf-gandalf@email.com]',
            '[Mindy-mindy@email.com]',
            '[Paul-paul@email.com]'],
            hashLinearProbing.print())
    })
})