declare var require: any
const prompt = require('prompt-sync')();

var size = prompt('Enter a number to print its table: ')
var n = parseInt(size)

console.log(n, ' - Table')
for(let i = 1; i <= 10; ++i) {
    console.log(n, 'X', i, '=', i * n)
}

var num = prompt('Enter a number to get its reverse: ')
var nums = parseInt(size)

var ans = 0
while(num != 0) {
    ans = ans*10 + (num % 10)
    num = Math.floor(num / 10)
}

console.log('Reverse: ', ans)
export {}
