function addItem() {
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');
    const menu = document.querySelector('select')
    const option = document.createElement('option');
    if (text.value != '' && value.value != '') {
        option.value = value.value;
        option.text = text.value;
        menu.appendChild(option);
        text.value = '';
        value.value = '';
    }
}