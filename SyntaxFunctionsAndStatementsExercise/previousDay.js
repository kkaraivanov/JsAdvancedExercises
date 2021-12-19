function previousDay(year, month, day){
    var date = new Date(year, month, day);
    var dayInMilisecconds = 24 * 60 * 60 * 1000;
    var previous = new Date(date.getTime() - dayInMilisecconds);

    if(day === 1){
        lastDate = new Date(year, month + 1, 0).getDate();
        return `${previous.getFullYear()}-${previous.getMonth()}-${lastDate}`;
    }

    return `${previous.getFullYear()}-${previous.getMonth()}-${previous.getDate()}`;
}

console.log(previousDay(2016, 9, 30));
console.log(previousDay(2021, 3, 1));