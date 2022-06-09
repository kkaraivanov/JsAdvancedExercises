function sortArray(args){
    return args.sort(function(a, b) {
        return a.normalize().localeCompare(b.normalize())
    }).sort((x, y) => {
        return x.length - y.length
    }).join('\r\n');
}

//Deny omen test Default
console.log(sortArray(['test', 'Deny', 'omen', 'Default']))