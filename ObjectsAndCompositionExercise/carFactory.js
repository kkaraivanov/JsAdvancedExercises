function carFactory(args) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]
    const carriages = [
        { type: 'hatchback', color: args.color },
        { type: 'coupe', color: args.color }
    ]
    const wheelsizes = args.wheelsize % 2 == 1 ? args.wheelsize : args.wheelsize - 1;

    return {
        model: args.model,
        engine: engines.filter(x => x.power >= args.power)[0],
        carriage: carriages.filter(x => x.type == args.carriage)[0],
        wheels: [wheelsizes, wheelsizes, wheelsizes, wheelsizes]
    }
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));