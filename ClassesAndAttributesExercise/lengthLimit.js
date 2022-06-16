class Stringer{
    constructor(str, len) {
        this.innerString  = str,
        this.innerLength = len
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        this.innerLength = (this.innerLength < 0) ? 0 : this.innerLength;   
    }
    
    toString() {
        return this.innerString.length > this.innerLength 
        ? this.innerString.substring(0, this.innerLength) + '...' 
        : this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
