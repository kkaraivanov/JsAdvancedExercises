function magicMatrices(arr){
    return checkIsMagic(arr) && checkIsMagic(rotateArray(arr));

    function rotateArray(a) {
        return a[0].map((x, y) => a.map(x => x[y]))
    }

    function checkIsMagic(arr) {
        arr = arr.map(x => x.reduce((a, b) => a + b));
        return Array.from(new Set(arr)).length === 1;
    }
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));