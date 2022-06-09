function orbit(args){
    return print(makeOrbit(args));
    function makeOrbit(arr) {
        const m = [];
        const [r, c, sR, sC] = [...arr];

        for (let row = 0; row < r; row++) {
            m[row] = [];
            for (let col = 0; col < c; col++) {
                const max = Math.max(Math.abs(sR - row), Math.abs(sC - col));
                m[row][col] = 1 + max;       
            }            
        }

        return m;
    }
    function print(m) {
        return m.map(x => x.join(' ')).join('\n');
    }
}

console.log(orbit([4, 4, 0, 0]))