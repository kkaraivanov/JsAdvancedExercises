function heroicInventory(args) {
    return JSON.stringify(args.map(x => {
        [name, level, items] = [...x.split(' / ')];
        return {
            name,
            level: +level,
            items: !items ? [] : items.split(', ')
        };
    }))
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
));