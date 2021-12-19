function aggregateElements(arr){
    return arr.reduce((x, y) => x + y, 0) + 
    '\r\n' + arr.reduce((x, y) => x + 1 / y, 0) + 
    '\r\n' + arr.reduce((x, y) => x + y, '')
}

console.log(aggregateElements([1, 2, 3]));
console.log(aggregateElements([2, 4, 8, 16]));