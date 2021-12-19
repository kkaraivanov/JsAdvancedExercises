function listOfNames(a){
    let i = 1;
    arr = Array.from(a).sort().map(x => `${i++}.${x}`);

    return arr.join('\r\n');
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));