function orbit(input){
    print(matrix(input));

    function matrix(matrix){
        let m = [];
        [rows, cols] = [matrix[0], matrix[1]];
        [startR, startC] = [matrix[2], matrix[3]];

        for (let row = 0; row < rows; row++) {
            m[row] = [];
            for (let col = 0; col < cols; col++) {
                m[row][col] = 1 + Math.max(Math.abs(startR - row), Math.abs(startC - col));
            }
        }

        return m;
    }

    function print(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

orbit([5, 5, 2, 2])