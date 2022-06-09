function create(words) {
   const cont = document.getElementById('content');
   const cssClass = 'content-container';
   [...words].forEach(x => {
      const p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = x;
      const div = document.createElement('div');
      div.className = cssClass;
      div.appendChild(p)
      div.addEventListener('click', onClick);
      cont.appendChild(div);
   })
   function onClick(e) {
      const p = e.target.children[0];
      p.style.display === 'none' ? p.style.display = 'block' : p.style.display =  'none';
   }
}