function addAndRemoveElements(c){
    let arr = new Array();
    let counter = 0;

    c.forEach(element => {
        let i = counter;
        element === 'add' ? arr.push(counter + 1) : arr.pop(i);
        counter++;
    });

    return arr.length === 0 ? 'Empty' : arr.join('\r\n');
}

console.log(addAndRemoveElements(['add', 'add', 'add', 'add']));
console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));