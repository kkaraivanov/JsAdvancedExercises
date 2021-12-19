function cookingByNumbers(a , b, c, d, e, f){
    const input = [`${b}`, `${c}`, `${d}`, `${e}`, `${f}`];
    let num = parseInt(a);

    const commands = (c, n) => {
        if(c === 'chop') return n / 2;
        if(c === 'dice') return Math.sqrt(n);
        if(c === 'spice') return n + 1;
        if(c === 'bake') return n * 3;
        if(c === 'fillet') return n - (n * .20);
    }
        
    for(let i = 0; i < input.length; i++){
        let currentCommand = input[i];
        num = commands(currentCommand, num);
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');