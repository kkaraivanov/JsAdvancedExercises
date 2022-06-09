function solve() {
    const html = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }
    const sections = document.querySelectorAll('section');
    const open = sections[1].children[1];
    const inProgres = sections[2].children[1];
    const complete = sections[3].children[1];
    const articleElement = (task, desc, date) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${task}</h3>
            <p>Description: ${desc}</p>
            <p>Due Date: ${date}</p>
            <div class="flex"></div>`
        return article;
    }
    const btn = (c, t) => {
        const btn = document.createElement('button')
        btn.className = c
        btn.textContent = t
        btn.addEventListener('click', onClick);
        return btn;
    }
    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();
        if (Object.values(html).filter(x => x.value != '').length === 3) {
            const article = articleElement(html.task.value, html.description.value, html.date.value);
            article.children[3].appendChild(btn('green', 'Start'))
            article.children[3].appendChild(btn('red', 'Delete'))
            open.appendChild(article)
        }
        Object.values(html).forEach(e => e.value = '');
    })
    function onClick(e) {
        const parentBtn = e.target.parentNode;
        const article = parentBtn.parentNode;
        if (e.target.className === 'green') {
            parentBtn.removeChild(e.target);
            parentBtn.appendChild(btn('orange', 'Finish'));
            inProgres.appendChild(article);
        } else if (e.target.className === 'orange') {
            complete.appendChild(article)
            article.removeChild(parentBtn)
        }else { //if(e.target.className === 'red') {
            article.remove(article);
        } 
    }
}