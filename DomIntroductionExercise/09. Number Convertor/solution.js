function solve() {
    const elements = {
        input: document.getElementById("input"),
        optionsMenu: document.getElementById("selectMenuTo"),
        output: document.getElementById("result"),
        button: document.querySelector("#container > button")
    }
    const menu = arr => arr.map(x => {
        const option = document.createElement("option");
        x = x.toLocaleLowerCase();
        option.value = x;
        option.text = `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`;
        return option;
    })
    menu(["binary", "hexadecimal"]).forEach(x => elements.optionsMenu.add(x));

    const print = element => (elements.output.value = element);
    function converter(...fromArray){
        let [convertType, num] = fromArray;
        let convertTypes = {
            binary: (n) => (n >>> 0).toString(2),
            hexadecimal: (n) => n.toString(16).toLocaleUpperCase()
        }
        
        num = Number(num) || 0;
        return convertTypes[convertType](num);
    }

    elements.button.addEventListener('click', () => {
        print(converter(elements.optionsMenu.value, elements.input.value));
    })
}