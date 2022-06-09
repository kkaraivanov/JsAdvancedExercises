function toUppercase(args){
    return args.match(/\w+/g).map(x => {
        return x.toUpperCase();
    }).join(', ');
}

console.log(toUppercase('Hi, how are you?'))