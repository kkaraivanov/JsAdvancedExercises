function sameNumbers(number){
    var firstNum = number % 10;
    var isSame = true;
    var sum = 0;
    
    while(number){
        if(number % 10 !== firstNum) {
            isSame = false;
        }
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return `${isSame} \r\n ${sum}`;
}

console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));