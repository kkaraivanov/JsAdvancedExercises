function solution(){
    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    const commands = {
        restock,
        prepare,
        report
    }
    return manager;

    function manager(args){
        const [command, t, q] = args.split(' ');
        return commands[command](t, q);
    }

    function restock(t, q){
        stock[t] += +q;
        return 'Success'
    }

    function prepare(t, q){
        const recipe = Object.entries(recipes[t]);
        recipe.forEach(a => a[1] *= +q)
        for (const [art, req] of recipe) {
            if(stock[art] < req) return `Error: not enough ${art} in stock`
        }
        recipe.forEach(([a, r]) => stock[a] -= r);
        return 'Success'
    }

    function report(){
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }
}

let manager = solution ();
console.log (manager ("restock flavour 50")); 
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));