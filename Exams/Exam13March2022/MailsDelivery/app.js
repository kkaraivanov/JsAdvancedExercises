function solve() {
    HTMLLIElement.prototype.addEmail = function(obj){
        const [recipient, title, message] = [...Object.values(obj)]
        this.innerHTML = `
            <h4>Title: ${title.value}</h4>
            <h4>Recipient Name: ${recipient.value}</h4>
            <span>${message.value}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>`
            Object.values(obj).forEach(e => e.value = '');
    }
    HTMLLIElement.prototype.sendEmail = function(recipient, title){
        this.innerHTML = `
            <span>${recipient}</span>
            <span>${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`
    }
    HTMLLIElement.prototype.deleteEmail = function(recipient, title){
        this.innerHTML = `
            <span>${recipient}</span>
            <span>${title}</span>`
    }
    const input = {
        recipient: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    }
    const lists = {
        mails: document.getElementById('list'),
        sentMails: document.querySelector('.sent-list'),
        deleteMails: document.querySelector('.delete-list')
    }
    document.getElementById('add').addEventListener('click', addEmail)
    document.getElementById('reset').addEventListener('click', () => {Object.values(input).forEach(e => e.value = '')})

    function addEmail(e){
        e.preventDefault();
        if(input.recipient.value == '' || input.title.value == '' || input.message.value == '') return

        const li = document.createElement('li');
        li.addEmail(input);
        li.querySelector('#send').addEventListener('click', sendMail);
        li.querySelector('#delete').addEventListener('click', onDelete)
        
        lists.mails.appendChild(li);
    }

    function sendMail(e){
        const parent = e.target.parentElement.parentElement;
        const li = document.createElement('li');
        let recipient = parent.children[1].textContent;
        recipient = recipient.replace('Recipient Name', 'To');
        const title = parent.children[0].textContent;
        li.sendEmail(recipient, title);
        lists.sentMails.appendChild(li);
        parent.remove()
        li.querySelector('.delete').addEventListener('click', onDelete)
    }

    function onDelete(e){
        const parent = e.target.parentElement.parentElement;
        const li = document.createElement('li');
        let recipient = parent.children[0].textContent;
        let title = parent.children[1].textContent;
        if(parent.children.length === 4){
            recipient = parent.children[1].textContent;
            title = parent.children[0].textContent;
        }
        li.deleteEmail(recipient, title)
        lists.deleteMails.appendChild(li);
        parent.remove();
    }
}
solve()