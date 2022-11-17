interface Student {
    name: string;
    rollNumber: number;
    department: string
    displayDetails: () => void
}

let s1: Student = {
    name: 'Tamilvanan',
    rollNumber: 31,
    department: 'CSE',
    displayDetails() {
        console.log('Name: ' + this.name)
        console.log('Roll number: ' + this.rollNumber)
        console.log('Department: ' + this.department)
    }
}

console.log(s1.displayDetails)


interface value {
    returnType: string
}

let sum = {
    value: 10,
    returnType: 'number'
}

var ans = (val: value) => {
    console.log(val.returnType)
}

ans(sum)

export {}
