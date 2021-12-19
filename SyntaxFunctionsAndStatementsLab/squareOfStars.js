function squareOfStars(x = 5){
    let str = '';
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            str += `* `;
        }
        str += '\r\n';
    }

    return str;
}

console.log(squareOfStars());