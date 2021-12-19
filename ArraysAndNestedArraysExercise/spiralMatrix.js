function spiralMatrix(a, b){
    print(spiral(a, b));

    function spiral(r, c) {
        let [count, counter, startRow, startCol, endRow, endCol] = [0, r * c, 0, 0, r-1, c - 1];
        let result = [];
        for (let row = 0; row < r; row++) result[row] = [];

        while (count < counter) {
            for (let col = startCol; col <= endCol; col++) result[startRow][col] = ++count;
            startRow++;

            for (let row = startRow; row <= endRow; row++) result[row][endCol] = ++count;
            endCol--;

            for (let col = endCol; col >= startCol; col--) result[endRow][col] = ++count;
            endRow--;

            for (let row = endRow; row >= startRow; row--) result[row][startCol] = ++count;
            startCol++;
        }
    
        return result;
      }

    function print(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

spiralMatrix(5, 5);