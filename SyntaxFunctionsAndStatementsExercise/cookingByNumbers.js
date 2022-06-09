function cbn(...args){
    let num = [...args].slice(0, 1);
    const c = [...args].slice(1);

    for (let i = 0; i < c.length; i++) {
        const el = c[i];
        num[i] = parseInt(cooking(i === 0 ? num[i] : num[i - 1], el))
    }

    function cooking(n, c) {
        const obj = {
            chop: n / 2,
            dice: Math.sqrt(n),
            spice: n + 1,
            bake: n * 3,
            fillet: n - (n * .20)
        }

        n = obj[c];
        return n;
    }
    
    return num.join('\n')
}

console.log(cbn('32', 'chop', 'chop', 'chop', 'chop', 'chop'))