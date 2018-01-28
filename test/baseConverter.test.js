let assert = require('assert')

// 进制转换算法
let baseConverter = require('../src/Stack/baseConverter')

describe('baseConverter', function () {
    it('base2', function () {
        assert.equal('10111', baseConverter(23, 2))
    })
    it('base8', function () {
        assert.equal('351', baseConverter(233, 8))
    })
    it('base16', function () {
        assert.equal('91D', baseConverter(2333, 16))
    })
})