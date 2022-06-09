function are(args){
    let c = 1;
    const res = [];
    
    [...args].forEach(el => {
        if(el === 'add'){
            res.push(c);
        }else{
            res.pop(c)
        }
        c++;
    });

    if(res.length === 0){return 'Empty'}
    return res.join('\r\n')
}

console.log(are(['add', 'add', 'remove', 'add', 'add']))