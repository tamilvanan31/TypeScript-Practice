import { Format } from './Formatter.js';

interface Car {
    name: string
    readonly color: string
    tyres: string
    serialNumber: number
    speed(mph: number): void
}

interface Pagani extends Car, Format{
    gear: string
    chassis: string
    format(): string
}

let p1: Pagani = {
    name: 'Pagani Huayra',
    color: 'Gold',
    tyres: 'Track tyres',
    serialNumber: 22,
    speed (mph: number): void {
        console.log('The top speed is', mph, 'mph')
    },
    gear: 'Long gears',
    chassis: 'Reinforced chasis', 
    format(): string{
        var formatted: string = 'Name: ' + this.name + '\nColor: ' + this.color
        return formatted
    }
}
//p1.color = 'Black' -> Not possible because of readonly
console.log(p1.format())
console.log(p1.speed(220))
