function solve() {
    HTMLTableRowElement.prototype.toWorker = function (obj, budged) {
        let sum = Number(budged.textContent) + Number(salary.value);
        budged.textContent = sum.toFixed(2);
        this.innerHTML = `
        ${Object.values(input).map(v => `<td>${v.value}</td>`).join('\n')}
        <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>`
        Object.values(input).forEach(v => v.value = '')

        this.lastElementChild.children[0].addEventListener('click', () => {
            sum = Number(budged.textContent) - Number(this.children[5].textContent);
            budged.textContent = sum.toFixed(2);
            this.remove();
        })
        this.lastElementChild.children[1].addEventListener('click', () => {
            Object.values(obj).forEach((e, i) => e.value = this.children[i].textContent);
            sum = Number(budged.textContent) - Number(this.children[5].textContent);
            budged.textContent = sum.toFixed(2);
            this.remove();
        })
    }
    const input = Object.assign(document.querySelector('form').querySelectorAll('input'));
    const table = document.getElementById('tbody')
    document.getElementsByTagName('form')[0].lastElementChild.addEventListener('click', onWork);

    function onWork(e) {
        e.preventDefault();
        if (!(!Object.values(input).filter(e => e.value == '').length)) return
        const row = document.createElement('tr');
        row.toWorker(input, document.getElementById('sum'));
        table.appendChild(row)
    }
}
solve()