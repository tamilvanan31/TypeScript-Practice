import { throws } from "assert"
import { Format } from './Formatter'
class Person {
    public name: string
    protected age: number
    private _email: string

    //getters and setters for the email ID
    //To run this use: tsc -t es5 classes.ts
    set email(email: string) {
        this._email = email
    }

    get email() {
        return this._email
    }

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    displayDetails(): void  {
        console.log('Name: ' + this.name + '\nAge: ' + this.age)
    }
}

class Employee extends Person {
    employeeID? : number
    constructor(name: string, age: number, employeeID ?: number) {
        super(name, age)
        this.employeeID = employeeID
    }
    displayDetails(): void {
        super.displayDetails()
        console.log('Employee ID: ' + this.employeeID)
    }
}

//Short hand notation for defining properties using constructor
class Cars implements Format{
    constructor(public name: string, public color: string, readonly engine: string) {}
    format(): string{
        return 'Name: ' + this.name + 
        '\nColor: ' + this.color + 
        '\nEngine: ' + this.engine

    }
}

let p1 = new Person('Donnie', 22)
p1.email = 'donniewalker@gmail.com'

let e1 = new Employee('Mark Convey', 36)
let c1 = new Cars('Volkswagen', 'Blue', 'V8')
p1.displayDetails()
console.log('Email: ', p1.email)
console.log('\n')
e1.displayDetails()
console.log('\n', c1.format())

