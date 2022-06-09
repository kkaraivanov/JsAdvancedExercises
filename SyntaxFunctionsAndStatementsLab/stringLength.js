function sl(...args) {
    return`${[...args].map(x => {
        return x.length
    }).reduce(sum, 0)}\r\n${Math.floor([...args].reduce(average, 0))}`;
    
    function sum(x, y){
        return x + y;
    }
    
    function average(x, y, index, arr){
        return x + y.length / arr.length
    }
}

console.log(sl('chocolate', 'ice cream', 'cake'));