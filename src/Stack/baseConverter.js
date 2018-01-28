const Stack = require('./Stack-v4')

function baseConverter(num, base) {
    let remStack = new Stack(),
        rem = null,
        baseString = '',
        digits = '0123456789ABCDEF'

    while (num > 0) {
        rem = Math.floor(num % base)
        remStack.push(rem)
        num = Math.floor(num / base)
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }

    return baseString
}

module.exports = baseConverter