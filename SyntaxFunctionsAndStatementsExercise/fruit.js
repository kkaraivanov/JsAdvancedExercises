function fruit(...args){
    let [f,w,m] = [...args];
    return `I need \$${(Number(w * m)/1000).toFixed(2)} to buy ${(Number(w)/1000).toFixed(2)} kilograms ${f}.`;
}

console.log(fruit('apple', 1563, 2.35))