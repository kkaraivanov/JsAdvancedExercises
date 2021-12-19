function extractIncreasingSubsequence(a){
    arr = [];
    let temp = Number.MIN_SAFE_INTEGER;

    a.forEach(element => {
        if(element >= temp){
            temp = element;
            arr.push(element);
        }
    });

    return arr;
}

console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));