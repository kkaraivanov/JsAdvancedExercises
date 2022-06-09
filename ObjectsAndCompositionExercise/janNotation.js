function janNotation(args) {
    function calc(...args) {
        const [x, y, o] = args;
        const opr = {
            '+': (x, y) => +x + +y,
            '-': (x, y) => x - y,
            '/': (x, y) => x / y,
            '*': (x, y) => x * y
        }

        return opr[o](x, y);
    }

    const notation = {
        error: false,
        arr: [],
        sizeIsNotValid() { return this.arr.length < 2 ? this.error = true : false },
        add(e) { this.arr.push(e) },
        notate(o) {
            let x = this.arr.splice(-2);
            this.add(calc(...x, o));
        },
        print() {
            return !this.error
                ? this.arr.length === 1
                    ? this.arr[0]
                    : 'Error: too many operands!'
                : 'Error: not enough operands!'
        }
    }

    args.forEach(e => {
        if(typeof e == 'number') notation.add(+e);
        else {
            if(notation.sizeIsNotValid()) return;
            else notation.notate(e);
        }
    });

    return notation.print();
}

console.log(janNotation([
    15,
    //3,
    //4,
    //'*',
    '/']
))