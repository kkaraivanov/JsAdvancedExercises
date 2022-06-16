function juiceFlavors(args){
    const juices = {};
    const buttles = {};
    for (const item of args) {
        const [juice, quantity] = item.split(' => ');
        if(!juices.hasOwnProperty(juice)) juices[juice] = 0;
        juices[juice] += Number(quantity);

        if(juices[juice] >= 1000){
            const buttle = Math.floor(juices[juice] /1000);
            const res = juices[juice] % 1000;
            if(!buttles.hasOwnProperty(juice)) buttles[juice] = 0;
            buttles[juice] += buttle;
            juices[juice] = res;
        }
    }
    
    return Object.keys(buttles).map(e => (e + ' => ' + buttles[e])).join('\n')
}

console.log(juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']))