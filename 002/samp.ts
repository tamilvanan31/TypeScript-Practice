interface Concat {
    (a: string, b: string): string
}

let join: Concat = (a, b) => a + b

console.log(join('John', ' Felix'))