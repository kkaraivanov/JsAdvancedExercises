function solve() {
  const textArea = document.getElementById('input'),
        container = document.querySelector('div #output');

  if(textArea.value.trim().match(/^ *$/) === null){
    let text = textArea.value.split('.').map(x => x !== '' ? x = `${x}.` : x = x).filter(x => x);
    while(text.length !== 0) {
      let p = document.createElement('p');
      p.innerHTML = text.splice(0, 3).join('.');
      container.appendChild(p)
    }
  }
}