function createSortedList() {
    function List() {
        this.arr = [],
        this.sorted = () => this.arr.sort((a, b) => a - b),
        this.add = el => {
            this.arr.push(el);
            this.sorted();
        },
        this.remove = i => {
            if(this.arr[i] !== undefined) this.arr.splice(i, 1);
            this.sorted();
        },
        this.get = i => {
            if(this.arr[i] !== undefined) return this.arr[i];
            this.sorted();
        },
        Object.defineProperties(this, {
            size: {
                get: () => this.arr.length
            }
        })
    }

    return new List();
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size)
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));