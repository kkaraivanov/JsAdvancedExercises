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

  generateBtn.addEventListener('click', generateOnClick);
}