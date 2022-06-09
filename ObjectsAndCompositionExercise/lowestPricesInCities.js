function lowestPricesInCities(args) {
    const obj = {};
    const res = [];
    for (const line of args) {
        const [town, product, price] = line.split(' | ');
        if(!obj.hasOwnProperty(product)) {
            obj[product] = {town, price: +price}
        }else {
            if(obj[product].price > +price) {
                obj[product] = {town, price: +price}
            }
        }
    }

    Object.keys(obj).forEach(e => {
        res.push(`${e} -> ${obj[e].price} (${obj[e].town})`)
    });

    return res.join('\r\n');
}

console.log(lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]
));