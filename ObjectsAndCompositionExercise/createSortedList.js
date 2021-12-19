function createSortedList(){
    function obj(){
        this.list = [],
        this.sorted = () => this.list.sort((a, b) => a - b),
        this.add = element => {
            this.list.push(element)
            this.sorted()
        },
        this.remove = element => {
            if(this.list[element] !== undefined) this.list.splice(element, 1)
            this.sorted()
        },
        this.get = element => {
            if(this.list[element] !== undefined) return this.list[element]
            this.sorted()
        },
        Object.defineProperties(this, {
            size: {
                get: () => this.list.length
            }
        })
    }

    return new obj();
}