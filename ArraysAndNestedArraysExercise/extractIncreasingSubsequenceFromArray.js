function es(args) {
    return args.filter((e, i) => e >= Math.max(...args.slice(0, i)))
}

console.log(es([1, 3, 8, 4, 10, 12, 3, 2, 24]))