function largestNumber(a, b, c){
    const arr = [`${a}`, `${b}`, `${c}`,];
    let temp = Number.MIN_SAFE_INTEGER;
    arr.forEach(element => {
        if (temp < parseInt(element)) {
            temp = parseInt(element);
        }
    });;

    return `The largest number is ${temp}.`;
}

console.log(largestNumber(5, -3, 16));
console.log(largestNumber(-3, -5, -22.5));