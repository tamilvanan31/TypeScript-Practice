declare var require: any
const prompt = require('prompt-sync')();

let user = {
    name: 'Tamilvanan', 
    empNumber: 5685373
}

const query = prompt('Availabiliy: ')
var isAvailable = query == 'yes'

//if and if-else
if(isAvailable) {
    console.log(`Name: ${user['name']}
Employee number: E${user['empNumber']}`)
}
else {
    console.log("No details fetched")
}

var grades: string[] = ['A', 'B', 'C', 'D']

function grade(mark: number): string {
    //if-else ladder
    if(mark >=90) {
        return grades[0]
    }
    else if(mark >= 80 && mark < 90) {
        return grades[1]
    }
    else if(mark >= 60 && mark < 80) {
        return grades[2]
    }
    else {
        return grades[3] + " - Need improvement!"
    }
}
var mark = prompt("Enter your mark: ")
var marks = parseInt(mark)
console.log(grade(marks))

let day : number = 4;

switch (day) {
    case 0:
        console.log("Sunday.");
        break;
    case 1:
        console.log("Monday.");
        break;
    case 2:
        console.log("Tuesday.");
        break;
    case 3:
        console.log("Wednesday.");
        break;
    case 4:
        console.log("Thursday.");
        break;
    case 5:
        console.log("Friday.");
        break;
    case 6:
        console.log("Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}

export {}