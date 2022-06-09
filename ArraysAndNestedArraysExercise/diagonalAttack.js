function diagonalAttack(args) {
    const matrix = args.map(x => x.split(' ').filter(x => x != '').map(Number));
    if (matrix.length != matrix[0].length) {
        return matrix.map(x => x.join(' ')).join('\n');
    }

    let l = 0, r = 0;
    for (let row = 0; row < matrix.length; row++) {
        l += matrix[row][row];
        r += matrix[row][matrix.length - row - 1];
    }

    return l === r
            ? print(change(matrix, r))
            : print(matrix);

    function change(m, n) {
        for (let r = 0; r < m.length; r++) {
            for (let c = 0; c < m[r].length; c++) {
                if(r != c && r != m.length - 1 - c){
                    m[r][c] = n;
                }
            }
        }

        return m;
    }

    function print(m) {
        return m.map(x => x.join(' ')).join('\n');
    }
}

console.log(diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
))