function solve() {
  let text = document.getElementById('text'),
    convention = document.getElementById('naming-convention'),
    result = document.getElementById('result');

  let isValid = convention.value.includes('Camel') || convention.value.includes('Pascal');
  !isValid ? result.textContent = 'Error!' : result.textContent = change(text.value, convention.value.includes('Camel'));

  function change(text, isCamel = false) {
    const match = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    let matches = String(text.toLowerCase()).match(match);
    let res = '';
    for (let i = 0; i < matches.length; i++) {
      let e = matches[i];
      if(i!== 0) e = e.substr(0, 1).toUpperCase() + e.substr(1);
      res += e;
    }

    !isCamel ? res = res.substr(0, 1).toUpperCase() + res.substr(1) : res;
    return res;
  }
}