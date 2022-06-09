function solve() {
    const container = document.getElementById('container');
    const [name, hall, price] = Array.from(container.querySelectorAll('input'));
    const movies = document.getElementById('movies');
    const archive = document.getElementById('archive');
    archive.children[2].addEventListener('click', (e) => {
        const ul = e.target.parentElement.children[1];
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    })
    const li = (name, hall, price) => {
        const el = document.createElement('li');
        price = Number(price).toFixed(2);
        el.innerHTML = `
        <span>${name}</span>
        <strong>Hall: ${hall}</strong>
        <div>
            <strong>${price}</strong>
            <input placeholder="Tickets Sold">
        </div>`
        return el;
    }
    const btn = (t) => {
        b = document.createElement('button')
        b.textContent = t;
        b.addEventListener('click', onClick);
        return b
    }

    container.getElementsByTagName('button')[0].addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value != '' && hall.value != '' && price.value != '' && !isNaN(price.value)) {
            const field = li(name.value, hall.value, price.value);
            field.children[2].appendChild(btn('Archive'))
            movies.children[1].appendChild(field);
            Object.values({ name, hall, price }).forEach(e => e.value = '');
        }
    })

    function onClick(e) {
        const parent = e.target.parentElement
        if (e.target.textContent == 'Archive') {
            const field = parent.parentElement;
            if (parent.children[1].value != '' && !isNaN(parent.children[1].value)) {
                const total = (parent.children[0].textContent * +parent.children[1].value).toFixed(2)
                field.children[1].textContent = `Total amount: ${total}`;
                field.removeChild(parent);
                field.appendChild(btn('Delete'))
                archive.children[1].appendChild(field);
            }
        }else{
            parent.parentElement.removeChild(parent);
        }
    }
}