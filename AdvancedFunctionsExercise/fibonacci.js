function getFibonator() {
    return (function() {
        [this.t, this.p, this.c] = [this.p, this.c, this.p + this.c]
        return this.p
    }).bind({
        p: 0,
        c: 1,
        t: 0
    })
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
