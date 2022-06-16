class Hex {
    constructor(v){
        this.value = v
    }
    valueOf() {return this.value}
    toString() {return '0x' + this.value.toString(16).toUpperCase();}
    plus(num) {return typeof num == 'number' ? new Hex(this.value + Number(num)) : typeof num == 'object' ? new Hex(this.value + Number(num.value)) : undefined}
    minus(num) {return typeof num == 'number' ? new Hex(this.value - Number(num)) : typeof num == 'object' ? new Hex(this.value - Number(num.value)) : undefined}
    parse(str) {return parseInt(str, 16);}
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
