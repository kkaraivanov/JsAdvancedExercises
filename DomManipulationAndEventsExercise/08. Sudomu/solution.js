function solve() {
    const [check, clear] = document.querySelectorAll('button');
    const table = document.querySelector('table');
    const inputs = document.querySelectorAll('input');
    const checkInfo = document.querySelector('#check p');

    clear.addEventListener('click', () => {
        [...inputs].forEach(e => (e.value = ''));
        table.style.border = 'none';
        checkInfo.textContent = '';
    })

    check.addEventListener('click', () => {
        if (quickCheck()) {
            table.style.border = '2px solid green';
            checkInfo.style.color = 'green';
            checkInfo.textContent = "You solve it! Congratulations!";
        } else {
            table.style.border = '2px solid red';
            checkInfo.style.color = 'red';
            checkInfo.textContent = "NOP! You are not done yet...";
        }
    })

    function quickCheck() {
        const matrix = [...document.querySelectorAll('tbody tr')].map(r => (
            [...r.querySelectorAll('input')].map(c => +c.value)
        ))
        const heck = matrix.map(function(r, i) {
            const c = this.map(r => r[i]);
            if (c.length != [...new Set(c)].length || r.length != [...new Set(r)].length) {
                return false;
            }

            return true;
        }, matrix);
        
        return heck;
    }
}