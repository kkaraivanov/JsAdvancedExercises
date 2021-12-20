function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName("button");
  const [input, output] = document.getElementsByTagName("textarea");
  const tBody = document.querySelector("tbody");
  const tRow = ({ img, name, price, decFactor }) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td><img src=${img}></td>
    <td><p>${name}</p></td>
    <td><p>${price}</p></td>
    <td><p>${decFactor}</p></td>
    <td><input type="checkbox"/></td>`;

    return row
  }
  const generateOnClick = () => JSON.parse(input.value).forEach(x =>
    tBody.appendChild(tRow(x))
  )

  const buyOnClick = () => {
    let inputArr = Array.from(tBody.querySelectorAll("input[type=checkbox]:checked"))
    .map(x => Array.from(x.parentNode.parentNode.children).slice(1, 4)
    .map(x => Number(x.children[0].innerHTML) || x.children[0].innerHTML));
    let sum = arr => arr.reduce((a, v) => a + v, 0);
    let name = inputArr.map(x => x[0]).join(", ");
    let price = sum(inputArr.map(x => x[1]));
    let average = sum(inputArr.map(x => x[2])) / inputArr.length;
    output.value = `Bought furniture: ${name}\r\nTotal price: ${price.toFixed(2)}\r\nAverage decoration factor: ${average}`;
  }

  generateBtn.addEventListener('click', generateOnClick);
  buyBtn.addEventListener('click', buyOnClick);
}