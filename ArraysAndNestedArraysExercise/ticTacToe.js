function ticTacToe(args) {
    let player = 'X'; // X or O
    const alerts = [];

    const table = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    for (const line of args) {
        const [row, col] = line.split(' ').map(Number);
        if (table[row][col] !== false) {
            alerts.push('This place is already taken. Please choose another!');
            continue;
        }

        table[row][col] = player;
        for (let i = 0; i < table.length; i++) {
            if (
                table[i][0] === player &&
                table[i][1] === player &&
                table[i][2] === player
            ) {
                alerts.push(`Player ${player} wins!`);
                return print();
            } else if (
                table[0][i] === player &&
                table[1][i] === player &&
                table[2][i] === player
            ) {
                alerts.push(`Player ${player} wins!`);
                return print();
            }
        }
        
        if (
            table[0][0] === player &&
            table[1][1] === player &&
            table[2][2] === player
        ){
            alerts.push(`Player ${player} wins!`);
            return print();
        }else if (
            table[0][2] === player &&
            table[1][1] === player &&
            table[2][0] === player
        ){
            alerts.push(`Player ${player} wins!`);
            return print();
        }

        let isWin = false;
        for (let i = 0; i < table.length; i++) {
            if (table[i].includes(false)) {
                isWin = true;
            }
        }

        if (!isWin) {
            alerts.push('The game ended! Nobody wins :(');
            return print();
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function print() {
        return `${alerts.join('\r\n')}\r\n${table.map(x => x.join('\t')).join('\n')}`
    }

    return print()
}

console.log(ticTacToe(
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
));