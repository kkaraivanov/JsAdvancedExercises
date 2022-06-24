window.addEventListener('load', solve);

function solve() {
    const input = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price')
    }
    const table = document.getElementById('furniture-list');
    function addToTable(obj){
        const [model, year, description, price] = [...Object.values(obj).map(e => e.value)];
        const row = document.createElement('tr')
        const hidenRow = document.createElement('tr')
        row.innerHTML = `<td>${model}</td>
        <td>${Number(price).toFixed(2)}</td>
        <td>
            <button class='moreBtn'>More Info</button>
            <button class='buyBtn'>Buy it</button>
        </td>`
        hidenRow.innerHTML = `<td>Year: ${year}</td>
        <td colspan='3'>Description: ${description}</td>`
        
        row.className = "info"
        hidenRow.className = "hide"
        this.appendChild(row)
        this.appendChild(hidenRow)
        Object.values(obj).forEach(e => e.value = '')

        row.lastElementChild.children[0].addEventListener('click', (e) => {
            if(!(e.target.textContent === 'Less Info')){
                e.target.textContent = 'Less Info';
                hidenRow.style.display = 'contents'
            } else {
                e.target.textContent = 'More Info';
                hidenRow.style.display = 'none'
            }
        })
        row.lastElementChild.children[1].addEventListener('click', () => {
            const result = this.parentElement.lastElementChild.children[0].children[1]
            const total = Number(result.textContent) + Number(price);
            result.textContent = total.toFixed(2)
            row.remove();
            hidenRow.remove();
        })
    }

    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault()
        const isEmpty = !(!Object.values(input).filter(e => e.value == '').length);
        const isNumber = Number(input['year'].value) > 0 && Number(input.price.value)
        if(isEmpty || !isNumber) return
        addToTable.call(table, input);
    });
}