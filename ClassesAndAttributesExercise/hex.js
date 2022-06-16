class Hex {
    #hex
    constructor(v){
        this.value = v,
        this.#hex = '0x' + v.toString(16).toUpperCase();
    }
    valueOf = () => this.value
    toString = () => this.#hex
    plus = (num) => typeof num == 'number' ? new Hex(this.value + num) : typeof num == 'object' ? new Hex(this.value + num.value) : undefined
    minus = (num) => typeof num == 'number' ? new Hex(this.value - num) : typeof num == 'object' ? new Hex(this.value - num.value) : undefined
    parse = (str) => parseInt(str, 16);
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
