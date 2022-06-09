function solve() {
    const html = {
        input: document.getElementById('input'),
        selectTo: document.getElementById("selectMenuTo"),
        result: document.getElementById("result"),
        button: document.querySelector("#container > button")
    }
    const options = a => a.map(x => {
        const option = document.createElement('option');
        x = x.toLowerCase();
        option.value = x;
        option.text = `${x.charAt(0).toUpperCase()}${x.slice(1)}`;
        return option;
    })
    const print = e => html.result.value = e;
    function convert(n, t){
        const types = {
            binary: (n) => (n >>> 0).toString(2),
            hexadecimal: (n) => n.toString(16).toUpperCase()
        }
        n = Number(n) || 0;
        return types[t](n)
    }
    function onClick(){
        print(convert(html.input.value, html.selectTo.value));
    }
    options(['binary', 'hexadecimal']).forEach(x => html.selectTo.add(x));
    html.button.addEventListener('click', onClick)
}