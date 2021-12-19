function storeCatalogue(input){
    let obj = input.reduce((previous, current) => {
        let [name, price] = current.split(':').map(x => x.trim());
        let firstLet = name[0];

        if (previous[firstLet]) {
            previous[firstLet] = [...previous[firstLet], current];
        } else {
            previous[firstLet] = [current];
        }

        return previous;
    }, {})

    Object.keys(obj).sort().map(x => {
        console.log(x);
        obj[x].sort().map(p => {
            console.log(`  ${p.split(' : ').join(': ')}`);
        });
    });
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);