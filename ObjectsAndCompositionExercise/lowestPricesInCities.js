function lowestPricesInCities(input){
    let map = new Map();

    for(let line of input) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);

        if(!map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    map.forEach((m, p) => {
        let lp = Number.POSITIVE_INFINITY;
        let towns = "";
        m.forEach((price, town) => {
            if(price < lp){
                lp = Math.min(lp, price);
                towns = town;
            }
        });
        console.log(`${p} -> ${lp} (${towns})`);
    });
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);