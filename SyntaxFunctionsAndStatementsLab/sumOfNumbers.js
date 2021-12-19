function sumOfNumbers(x, y){
    let temp = 0;
    for(let i = Number(x); i <= Number(y); i++){
        temp += i;
    }

    return temp;
}

console.log(sumOfNumbers('-8', '20'));