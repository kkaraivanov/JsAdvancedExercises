function pel(...args){
    let [arr, step] = [...args];
    arr = get(arr, step);
    return arr

    function get(a, s){
        const arr = [];
        for (let y = 0; y < a.length; y+=s) {
            arr.push(a[y]);
        }

        return arr;
    }
}

console.log(pel(['5', '20', '31', '4', '20'], 2))