function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
        const t = y;
        y = x % y;
        x = t;
    };
     return x;
}

console.log(gcd(2154, 458))