declare var require: any
const prompt = require('prompt-sync')();

function binarySearch(arr: Array<number>, target: number): number {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] == target) {
            return mid;
        }
        else if(arr[mid] > target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}

const size = prompt("Enter the size: ");
var s = parseInt(size);
let arr: Array<number> = [];
for (let i = 0; i < s; ++i) {
    var ip = prompt();
    var ipp = parseInt(ip);
    arr[i]= ipp;
}

const target = prompt("Enter the target: ");
console.log(binarySearch(arr, target));
//type bs =ReturnType<typeof binarySearch>


export {};