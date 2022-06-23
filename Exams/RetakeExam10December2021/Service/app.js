window.addEventListener('load', solve);

function solve() {
    const inputs = Object.assign(Array.from(document.querySelector('form').children).filter(e => e.tagName != 'LABEL' && e.tagName != 'BUTTON'));
    const received = document.getElementById('received-orders');
    HTMLElement.prototype.makeSendElement = function(obj, moveTo){
        const [productType, descriprion, name, phone] = [...Object.values(obj).map(e => e.value)]
        this.className = 'container';
        this.innerHTML = `<h2>Product type for repair: ${productType}</h2>
            <h3>Client information: ${name}, ${phone}</h3>
            <h4>Description of the problem: ${descriprion}</h4>
            <button class='start-btn'>Start repair</button class='start-btn'>
            <button class='finish-btn' disabled>Finish repair</button class='start-btn'>`;
        Object.values(obj).forEach(e => e.value = '');
        this.children[3].addEventListener('click', () => {
            this.children[3].disabled = true;
            this.children[4].disabled = false;
        });
        this.children[4].addEventListener('click', () => {
            [...this.children].forEach((e, i) => {if(i >= 3) e.remove()})
            moveTo.appendChild(this);
        })
    }
    
    document.querySelector('#completed-orders .clear-btn').addEventListener('click', clear)
    document.querySelector('form button').addEventListener('click', onSubmit);

    function onSubmit(e){
        e.preventDefault();
        const isEmpty = Object.values(inputs).filter(e => e.value != '').length === 4
        if(!isEmpty) return
        const div = document.createElement('div');
        div.makeSendElement(inputs, document.getElementById('completed-orders'))
        received.appendChild(div)
    }
    function clear(e){
        const obj = Object.assign(Array.from(e.target.parentElement.querySelectorAll('.container')));
        Object.values(obj).forEach(e => e.remove())
    }
}