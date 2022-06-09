function magicMatrices(args) {
    const fRow = args[0].reduce((x, y) => x + y);
    function isMagic(matrix){
        let isMagic = true;
        matrix.forEach((el, i) => {
            const sumRow = el.reduce((x, y) => x + y);
            if(fRow != sumRow || sumRow != sum(getCol(matrix, i))){
                isMagic = false
            }
        });

        return isMagic;
    }

    function getCol(matrix, col) {
        var column = [];
        for (var i = 0; i < matrix.length; i++) {
            column.push(matrix[i][col]);
        }
        return column;
    }
    function sum(array) {
        let sum = 0;
        for (const item of array) {
            sum += item;
        }
        return sum;
    }
    return isMagic(args);
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]))
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]))
