function listOfNames(args){
    args.sort((a, b) => a.localeCompare(b)).forEach(function(el, i) {
        this[i] = `${++i}.${el}`;
      }, args);
    return args.join('\r\n')
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))