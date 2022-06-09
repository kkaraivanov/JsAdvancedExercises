function solve() {
  const input = document.getElementById('input'),
    output = document.querySelector('div #output');
  
  if(input.value.trim().match(/^ *$/) === null){
    let text = input.value.split('.').map(x => x !== '' ? x = `${x}.` : x = x).filter(x => x);

    while(text.length !== 0) {
      let p = document.createElement('p');
      p.innerHTML = text.splice(0, 3).join('.');
      output.appendChild(p)
    }
  }
}