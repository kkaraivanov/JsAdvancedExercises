class List {
    #arr
    constructor() {
        this.#arr = [];
        this.size = 0;
    }
    #sorted = () => this.#arr.sort((a, b) => a - b)
    add(element) {
        if (typeof element == 'number') this.#arr.push(element)
        this.#sorted()
        this.size++
    }
    remove(index) {
        if (index >= 0 && index < this.#arr.length && this.size > 0) {
            this.#arr.splice(index, 1)
            this.#sorted();
            this.size--
        }
    }
    get(index) {
        if (index >= 0 && index < this.#arr.length && this.size > 0) return this.#arr[index]
    }
}

let list = new List();
console.log(list.hasOwnProperty('size'))
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
console.log(`Size: ${list.size}`);
list.remove(1);
console.log(list.get(1));
console.log(`Size: ${list.size}`);