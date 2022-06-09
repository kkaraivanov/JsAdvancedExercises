function spiralMatrix(row, col) {
    let [count, counter, sR, sC, eR, eC] = [0, row * col, 0, 0, row - 1, col - 1];
    let res = [];
    for (let r = 0; r < row; r++) {
        res[r] = [];
    }

    while (count < counter) {
        for (let c = sC; c <= eC; c++) {
            res[sR][c] = ++count;
        }
        sR++;

        for (let r = sR; r <= eR; r++) {
            res[r][eC] = ++count;
        }
        eC--;

        for (let c = eC; c >= sC; c--) {
            res[eR][c] = ++count;
        }
        eR--;

        for (let r = eR; r >= sR; r--) {
            res[r][sC] = ++count;
        }
        sC++;
    }
    
    return res.map(x => x.join(' ')).join('\n');
}

console.log(spiralMatrix(5, 5))