function townsToJson(input){
    let pattern = /\s*\|\s*/;
    let arr = [];

    for(let l of input.splice(1)){
        let obj = l.split(pattern);
        arr.push(town(obj));
    }

    console.log(JSON.stringify(arr));

    function town(arr){
        return { Town: arr[1], Latitude: Number(Number(arr[2]).toFixed(2)), Longitude: Number(Number(arr[3]).toFixed(2))};
    }
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);