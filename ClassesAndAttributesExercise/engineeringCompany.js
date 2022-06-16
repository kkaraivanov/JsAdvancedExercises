function engineeringCompany(args) {
    //"{carBrand} | {carModel} | {producedCars}"
    const brands = {};

    args.forEach(e => {
        const [carBrand, carModel, producedCars] = e.split(' | ');
        if (!brands.hasOwnProperty(carBrand)) brands[carBrand] = {};
        if (!brands[carBrand].hasOwnProperty(carModel)) {
            brands[carBrand][carModel] = 0;
        }
        brands[carBrand][carModel] += +producedCars;
    });

    return Object.keys(brands)
        .map(e => e + '\n' + Object.keys(brands[e])
            .map(x => `###${x} -> ${brands[e][x]}`).join('\n'))
        .join('\n')
}

console.log(engineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))