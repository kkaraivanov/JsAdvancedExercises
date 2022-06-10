function evenOrOdd(args){
    if(typeof args !== 'string') return undefined
    if(args.length % 2 === 0) return 'even'
    return 'odd'
}

module.exports = evenOrOdd;