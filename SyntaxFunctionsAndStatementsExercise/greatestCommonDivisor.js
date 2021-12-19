function greatestCommonDivisor(x, y){
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
    x = Math.abs(x);
    y = Math.abs(y);

    while(y){
        var z = y;
        y = x % y;
        x = z;
    }

    return x;
}

console.log(greatestCommonDivisor(15, 5));
console.log(greatestCommonDivisor(2154, 458));