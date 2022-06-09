function solve() {
  const [generate, buy] = document.getElementsByTagName("button");
  const [input, output] = document.getElementsByTagName("textarea");
  const tBody = document.querySelector("tbody");
  const tr = ({ name, img, price, decFactor }) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td><img src=${img}></td>
      <td><p>${name}</p></td>
      <td><p>${price}</p></td>
      <td><p>${decFactor}</p></td>
      <td><input type="checkbox"/></td>
    `
    return row
  }

  function generateEvent() {
    JSON.parse(input.value).forEach(x => tBody.appendChild(tr(x)));
  }

  function sum(a) { return a.reduce((a, v) => a + v, 0) };

  function buyEvent() {
    let inputs = Array.from(tBody.querySelectorAll("input[type=checkbox]:checked"))
      .map(x => Array.from(x.parentNode.parentNode.children).slice(1, 4)
        .map(x => Number(x.children[0].innerHTML) || x.children[0].innerHTML));
    let name = inputs.map(x => x[0]).join(", ");
    let price = sum(inputs.map(x => x[1]));
    let average = sum(inputs.map(x => x[2])) / inputs.length;
    output.value = `Bought furniture: ${name}\r\nTotal price: ${price.toFixed(2)}\r\nAverage decoration factor: ${average}`;
  }

  generate.addEventListener('click', generateEvent);
  buy.addEventListener('click', buyEvent)
}