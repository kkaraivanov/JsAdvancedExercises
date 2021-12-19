function carFactory(obj){
    let car = {
        model: '',
        engine: {power: 90, volume: 1800},
        carriage: {type: '', color: ''},
        wheels: []
    }

    const makeCar = (prop) => {
        car.model = prop.model;
        car.carriage.type = prop.carriage;
        car.carriage.color = prop.color;
        car.engine = power(prop.power);
        for (let i = 0; i < 4; i++){
            if(prop.carriage === 'coupe') car.wheels[i] = prop.wheelsize;
            else car.wheels[i] = prop.wheelsize - 1;
        }

        function power(p){
            if(p <= 90) return { power: 90, volume: 1800 };
            if(p > 90 && p <= 120) return { power: 120, volume: 2400 };
            if(p > 120) return { power: 200, volume: 3500 };
        }
    }

    makeCar(obj);
    return car;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));