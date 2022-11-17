class Products<T> {
    list: Array<T> 
    displayLength(): void {
        /*for(let i of this.list) {
            process.stdout.write(i)
        }*/
        console.log(this.list.length)
    }
}

let books = new Products<string>
books.list = ['The Bible', 'Rich dad and poor dad', '7HOHEP']
books.displayLength()

let primeNumbers = new Products<number>
primeNumbers.list = [2, 3, 5, 7, 11]
primeNumbers.displayLength()

