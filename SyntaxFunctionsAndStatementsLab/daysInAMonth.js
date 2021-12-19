function daysInAMonth(m, y){
    return new Date(y, m, 0).getDate();
}

console.log(daysInAMonth(1, 2012));
console.log(daysInAMonth(2, 2021));