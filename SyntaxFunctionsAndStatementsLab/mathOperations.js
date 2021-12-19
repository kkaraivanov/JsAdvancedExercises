function mathOperations(a, b, c){
    switch (c) {
        case '+': return parseFloat(a) + parseFloat(b);
        case '-': return parseFloat(a) - parseFloat(b);
        case '*': return parseFloat(a) * parseFloat(b);
        case '/': return parseFloat(a) / parseFloat(b);
        case '%': return parseFloat(a) % parseFloat(b);
        case '**': return parseFloat(a) ** parseFloat(b);
    }
}

console.log(mathOperations(3, 5.5, '*'));