function sn(x) {
    const a = Array.from(String(x));
    const sum = a.reduce((a, b) => Number(a) + Number(b), 0);
    const isEqual = a.every((v, i, arr) => v === arr[0]);
    
    return isEqual ? `true \n${sum}` : `false \n${sum}`;
}

console.log(sn(2222222))