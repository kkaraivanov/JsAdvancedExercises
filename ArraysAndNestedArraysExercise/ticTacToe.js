function ticTacToe(input){
    let player = 'X';
    let base = [[false, false, false],
                [false, false, false],
                [false, false, false]]

    for(let line of input){
        [currRow, currCol] = line.split(' ').map(Number);
        let isFree = base[currRow][currCol] == false;

        if(isFree){
            base[currRow][currCol] = player;
        }
        else{
            if(!checkForFree()){
                console.log('The game ended! Nobody wins :(');
                printMatrix();
                return;
            }else{
                console.log('This place is already taken. Please choose another!');
                continue;
            }
        }

        if(checkForWin(player, base) === true){
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function checkForWin(p, m){
        let arr = m.map((x, y) => m.map(t => t[y]));
        let col1 = arr.map((x, y) => x[0]);
        let col2 = arr.map((x, y) => x[1]);
        let col3 = arr.map((x, y) => x[2]);

        let rol1 = col1[0] === p && col2[0] === p && col3[0] === p;
        let rol2 = col1[1] === p && col2[1] === p && col3[1] === p;
        let rol3 = col1[2] === p && col2[2] === p && col3[2] === p;
        let rolDr = col1[0] === p && col2[1] === p && col3[2] === p;
        let rolDl = col1[2] === p && col2[1] === p && col3[0] === p;
        let c1 = col1[0] === p && col1[1] === p && col1[2] === p;
        let c2 = col2[0] === p && col2[1] === p && col2[2] === p;
        let c3 = col3[0] === p && col3[1] === p && col3[2] === p;

        return rol1 || rol2 || rol3 || rolDr || rolDl || c1 || c2 || c3;
    }

    function checkForFree() {
        for (let row = 0; row < base.length; row++) {
            for (let col = 0; col < base[row].length; col++) {
                let result = base[row][col] === false;
                if(result) return true;
            }
        }

        return false;
    }

    function printMatrix() {
        for (let row = 0; row < base.length; row++) {
            console.log(base[row].join('\t'));
        }
    }
}

ticTacToe(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
    );
