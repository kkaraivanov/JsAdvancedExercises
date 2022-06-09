function solve() {
  const answers = ['onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];
  const results = [];
  Array.from(document.querySelectorAll('section')).forEach(x => {
    x.addEventListener('click', answer);
  });

  function result() {
    const h = document.getElementById('results').getElementsByTagName('h1')[0];
    document.getElementById('results').style.display = 'block';

    if(results.length === answers.length){
      h.textContent = 'You are recognized as top JavaScript fan!';
    }else{
      h.textContent = `You have ${results.length} right answers`
    }
  }

  function answer(e) {
    if (e.target.tagName === "P") {
      if(answers.includes(e.target.textContent)){
        results.push(e.target.textContent);
      }
      const current = e.target.parentNode.parentNode.parentNode.parentNode;
      current.style.display = 'none'
      const next = current.nextElementSibling;

      if (next.tagName === 'SECTION') {
        next.style.display = 'block'
      } else {
        result();
      }
    }
  }
}