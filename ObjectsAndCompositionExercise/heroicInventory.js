function heroicInventory(input){
    const obj = [];

    for(const prop of input){
        let [name, level, items] = prop.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        
        obj.push({name, level, items});
    }

    let print = JSON.stringify(obj);
    console.log(print);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);