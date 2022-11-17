import {a2N as add} from './addition'

class Grid {
    static origin = {
        x: 0,
        y: 0
    }
    //static members is initialized only once during the lifetime of the class
    static count: number = 0

    constructor(public scale: number){
        ++Grid.count
    }
    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let x = point.x - Grid.origin.x
        let y = point.y - Grid.origin.y
        return Math.sqrt(x * x + y * y) / this.scale
    }
    displayCount(): void {
        console.log(Grid.count)
    }

}

let g1 = new Grid(1.0) 
console.log(g1.calculateDistanceFromOrigin({x: 5, y: 3}))

let g2 = new Grid(3.0) 
console.log(g2.calculateDistanceFromOrigin({x: 4, y: 7}))

console.log(g2.displayCount())
var ans: number = add(5, 6)
console.log(ans)
