//abstract classes cannot be instantiated
abstract class Person {
    constructor(public name: string) {}
    display(): void {
        console.log(this.name)
    }
    abstract job(): void
}

class Developer extends Person {
    employeeId: number
    constructor(name: string, employeeId: number) {
        super(name)
        this.employeeId = employeeId
    }
    job(): void {
        console.log('Java Developer')
    }
}

class Tester extends Person {
    employeeId: number
    constructor(name: string, employeeId: number) {
        super(name)
        this.employeeId = employeeId
    }
    job(): void {
        console.log('Automation Tester')
    }
} 
let dev1 = new Developer('James', 1223)
dev1.display()
dev1.job()

let tester1 = new Tester('Connor', 3423)
tester1.display()
tester1.job()
