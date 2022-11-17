function Logger(constructor: Function) {
    console.log('Logging data...')
    console.log(constructor)
}
@Logger
class Guy {
    constructor(public name: string) {
        console.log(this.name)
    }
}

let g1 = new Guy('Guru')
