let aa = 10
//var ans: string = "";
function num(a){
    var ans: string = ''
    if(a) {
        let ans = 'Normie'
    }
    return ans
}

x = 10 //definition
var x: number //declaration

/*x is defined before its declaration(Hoisting).
  This is not possible using let and const keyword*/

var x = 20 // Redeclaration
//Not possible using let and const

//console.log(num("l"))
console.log(num(1))
console.log(x)

var z: void
console.log(typeof(z))


const arr: Array<number> = [1, 2, 3, 4]
let details: Array<number | string> = ['Tamilvanan', 'e5685373', "NaN"]
arr[2] = 9
details[2] = 31
var multiString: string = `Hey there!
Hope you're having a good day, ${details[0]}
`
//console.log(arr)
console.log(details)
console.log(multiString)

enum rollNumber {RollNo1 = 100, RollNo2, RollNo3 = 900, RollNo4, RollNo5}
const iter = Object.keys(rollNumber).filter((i) => !isNaN(Number(i)))
//console.log(iter)

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
const iter2 = Object.keys(FileAccess).filter((i) => !isNaN(Number(i)))
console.log(iter2)
export {}