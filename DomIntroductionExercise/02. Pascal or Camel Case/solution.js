function solve() {
  let text = document.getElementById('text'),
      convention = document.getElementById('naming-convention'),
      resilt = document.getElementById('result');

  let isValid = convention.value.includes('Camel') || convention.value.includes('Pascal');
  !isValid ? resilt.textContent = 'Error!' : resilt.textContent = changeCase(text.value, convention.value.includes('Camel'));

  function changeCase(input, isCamel = false) {
    let match = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    let t = String(input.toLowerCase()).match(match);
    let result = "";

    for (let i = 0; i < t.length; i++) {
      let current = t[i];
      if(i !== 0) current = current.substr(0, 1).toUpperCase() + current.substr(1);
      result += current;
    }

    !isCamel ? result = result.substr(0, 1).toUpperCase() + result.substr(1) : result;
    return result;
  }
}