function townsToJson(args) {
    args.shift();
    args = args.map(x => {
        const [Town, la, lo] = x.split('|').map(a => a.trim()).filter(a => a.length > 0);
        return { Town, Latitude: +((+la).toFixed(2)), Longitude: +((+lo).toFixed(2)) };
    });

    return JSON.stringify(args);
}

console.log(townsToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))