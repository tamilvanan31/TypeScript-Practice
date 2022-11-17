import { copyFileSync } from "fs"

function type<T> (data: T) {
    return data 
    //T is a type parameter whose type is decided during the runtime
}

let arr = type<number[]>([1, 2, 3, 4])
console.log(arr)

let str = type<Array<string>>(['1', '2', '3', '4']) //or string[]
console.log(str)

let obj = type<{}>({x: 31, y: 'Tamilvanan'})
console.log(obj)

function displayArray<T> (arr: Array<T>) {
    console.log(arr)
    //access for loop is not allowed
}

interface invertory<T> {
    itemlist: Array<T>
    displayItems(): void
}

class Mall implements invertory<string> {
    itemlist: string[] = ['Hardware', 'Food', 'Alcohol']
    displayItems(): void {
        for(let i = 0; i < this.itemlist.length; ++i) {
            process.stdout.write(this.itemlist[i] + ' ')
        }
    }
}

let nums: number[] = [3, 4, 5]
let s: string[] = ['Alan', 'Phil', 'Emmy']

displayArray(nums)
displayArray(s)

let m1 = new Mall()
m1.displayItems()
