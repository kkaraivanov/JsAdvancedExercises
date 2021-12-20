function addItem() {
    const elements = {
        menu: document.getElementById('menu'),
        text: document.getElementById('newItemText'),
        value: document.getElementById('newItemValue'),
    }
    
    function addOption(text, value){
        let option = document.createElement("option");
        option.textContent = text;
        option.value = value;

        elements.menu.appendChild(option);
    }

    function clear(){
        elements.text.value = null;
        elements.value.value = null
    }

    if(elements.text.value !== null && elements.value.value !== null){
        addOption(elements.text.value, elements.value.value);
        clear();
    }
}