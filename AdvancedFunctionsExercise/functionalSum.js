function add(args){
    const f = function(x){
        args += x;
        return f;
    }
    f.valueOf = function() {
        return args;
    }
    return f;
}

console.log(+add(1))
console.log(+add(1)(6)(-3))