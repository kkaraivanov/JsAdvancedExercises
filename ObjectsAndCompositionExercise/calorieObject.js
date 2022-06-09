function calorieObject(args){
    const obj = {};
    args.forEach((x, i) => {
        if(i % 2 === 0){
            if(!obj.hasOwnProperty(x)){
                obj[x] = +args[i + 1];
            }
        }
    });

    return obj;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));