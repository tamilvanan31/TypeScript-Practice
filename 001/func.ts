function addNumbers(x: number, y: number) {
    console.log(x + y)
}

var ans = addNumbers(10, 12)
console.log(ans)
console.log(typeof(ans))
console.log(addNumbers(11, 12))

//Arrow function. This function cannot be hoisted
//Helps in retaining the scope
var fullName = (firstName: string, lastName: string, middleName?: string) => 
    firstName + ' ' + middleName + ' ' + lastName

    //Default Parameter
var fullNameWithDefaultParams = (firstName: string, lastName: string, middleName: string = '') => 
firstName + ' ' + middleName + ' ' + lastName
console.log(fullName("Walter", "White", "Hartwell"))
console.log(fullNameWithDefaultParams("Tyman", "Mills"))

//Hoisting is possible only using normal functions

getGrade(80)

function getGrade(mark: number) {
    console.log('B')
}

//Rest Parameters
function names(fullName: string, ...otherNames: string[]) {
    console.log("FullName: ", fullName)
    console.log("Other names: ", otherNames.join(' '))
}

names('Tamilvanan', 'tamilvanan31', 'blocks', 'iSuckAtCoding')

function Person(age: number) {
    this.age = age
    this.display = () => {
        ++this.age;
        console.log(this.age)
    }
    /*
    'this' inside an arrow function is equivalent to the global object. 
    Whenever an arrow function is inside an object, 
    it will derive this value from the enclosing lexical scope. 
    Lexical scope, in this case, is the global scope.
    */

}
var person = new Person(1)
setTimeout(person.display, 1000)

function add(...values: number[]) {
    let sum = 0;
    values.forEach(val => sum += val);
    return sum;
}
const sum = add(5, 10, 15, 20);
console.log(sum); 

export {}




