function timeToWalk(first, second, third){
    let metersToUnevirsity = first * second;
    let meterPerSeccond = third / 3.6;
    let needTime = metersToUnevirsity / meterPerSeccond;
    let additionalTime = Math.floor(metersToUnevirsity / 500);

    let hours = Math.floor(needTime / 3600);
    let minutes = Math.floor((needTime - (hours * 3600)) / 60);
    let seconds = (needTime - (hours * 3600) - (minutes * 60)).toFixed(0);
    const addZero = (obj) => {
        return obj < 10 ? '0' + obj : obj;
    }

    if(additionalTime > 59){
        let addHour = Math.floor(additionalTime / 60);
        let remainingMinutes = additionalTime -addHour * 60;
        hours += addHour;
        minutes += remainingMinutes;
    }else{
        minutes += additionalTime;
    }

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    return `${hours}:${minutes}:${seconds}`;
}

console.log(timeToWalk(2564, 0.70, 5.5));
console.log(timeToWalk(4000, 0.60, 5));