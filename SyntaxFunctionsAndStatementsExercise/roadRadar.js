function roadRadar(speed, area){
    const areaLimits = {
        motorway: '130',
        interstate: '90',
        city: '50',
        residential: '20',
        status(l){return l <= 20 ? 'speeding' : l > 20 && l <= 40 ? 'excessive speeding' : 'reckless driving';}
    };
    let limit = areaLimits[area];
    let difference = Math.abs(speed - limit);

    if(speed <= limit) return `Driving ${speed} km/h in a ${limit} zone`;
    else return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${areaLimits.status(difference)}`;
}

console.log(roadRadar(40, 'city'));
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));