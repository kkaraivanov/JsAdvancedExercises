function circleArea(input){
    return typeof input !== 'number' ? `We can not calculate the circle area, because we receive a ${typeof input}.` : (Math.PI * Math.pow(input, 2)).toFixed(2);
}

console.log(circleArea(5));