function dayOfWeek(day){
    const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
    let dayIndex = weekday.indexOf(day);

    return dayIndex >= 0 && dayIndex <= 6 ? dayIndex + 1 : 'error';
}

console.log(dayOfWeek('Monday'));