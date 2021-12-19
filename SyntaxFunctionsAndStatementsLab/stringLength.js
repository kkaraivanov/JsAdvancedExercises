function stringLength(a, b, c){
    const arr = [`${a}`, `${b}`, `${c}`,];
    let arrSum = arr.map(c => {return c.length}).reduce((x, y) => x + y, 0);
    let average = arr.reduce((x, y, i, ar) => Math.floor(x + y.length / ar.length), 0);

    return `${arrSum}\r\n${average}`;
}

console.log(stringLength('chocolate', 'ice cream', 'cake'));
console.log(stringLength('pasta', '5', '22.3'));