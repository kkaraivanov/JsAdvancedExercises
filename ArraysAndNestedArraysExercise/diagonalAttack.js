function diagonalAttack(inputArr){
    let matrix = inputArr.map(r => r.split(' ').filter(x => x != '').map(Number));
    let sum = {left: 0, right: 0};
    if(matrix.length != matrix[0].length) print(matrix);

    for (let row = 0; row < matrix.length; row++) {
        sum.left += matrix[row][row];
        sum.right += matrix[row][matrix.length - 1 - row];
    }

    if(sum.left === sum.right) setNewElement(matrix, sum.left);
    print(matrix);

    function setNewElement(matrix, elements) {
        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length; col++) {

                if (row != col && row != matrix.length - 1 - col) {
                    matrix[row][col] = elements;
                }
            }
        }

        return matrix;
    }

    function print(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

diagonalAttack(
    [
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]
);