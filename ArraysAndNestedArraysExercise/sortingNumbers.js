
function sortingNumbers(args) {
    args.sort((x, y) => { return x - y }).map(function(x, i){
        if (i % 2 != 0) {
            this.splice(i, 0, this.pop());
        }
    }, args);;

    return args
}
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))