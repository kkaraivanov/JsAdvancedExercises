function storeCatalogue(args) {
    const obj = {};
    args.forEach(l => {
        const [prod, price] = l.split(' : ')
        const c = prod[0];
        if(obj.hasOwnProperty(c) == false){obj[c] = {}}
        obj[c][prod] = +price;
    })
    
    return Object.keys(obj).sort((x, y) => x.localeCompare(y)).map(l => {
        return `${l}\r\n${Object.keys(obj[l]).sort((x, y) => x.localeCompare(y)).map(x => {
            return `  ${x}: ${obj[l][x]}`;
        }).join('\r\n')}`;
    }).join('\r\n');
}

console.log(storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))