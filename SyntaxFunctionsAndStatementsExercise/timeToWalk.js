function ttw(...args) {
    const [x, y, z] = [...args];
    const aTime = Math.floor((x * y) / 500);
    const time = ((x * y) / (z / 3.6));
    let h = Math.floor(time / 3600);
    let m = Math.floor((time - (h * 3600)) / 60);
    let s = (time - (h * 3600) - (m * 60)).toFixed(0);
    const addZero = (obj) => {
        return obj < 10 ? '0' + obj : obj;
    }
    if(aTime > 59){
        let addHour = Math.floor(aTime / 60);
        let remainingMinutes = aTime -addHour * 60;
        h += addHour;
        m += remainingMinutes;
    }else{
        m += aTime;
    }

    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    return `${h}:${m}:${s}`;
}

console.log(ttw(2564, 0.70, 5.5));
// console.log(ttw(4000, 0.60, 5));