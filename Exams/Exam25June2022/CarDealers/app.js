window.addEventListener("load", solve);

function solve() {
  const inputs = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  };
  const table = document.getElementById('table-body');
  const profit = document.getElementById('profit')

  document.getElementById('publish').addEventListener('click', onPublish)
  function onPublish(e){
    e.preventDefault()
    const isNotEmpty = Object.values(inputs).filter(e => e.value != '').length === 6
    const priceIsValid = Number(inputs.originalCost.value) < Number(inputs.sellingPrice.value)
    if(!isNotEmpty || !priceIsValid) return
    const row = publish.call(document.createElement('tr'), inputs)
    table.appendChild(row)
  }

  function publish(obj){
    const [make, model, year, fuel, originalCost, sellingPrice] = Object.values(obj)
    console.log(make.value)
    this.clasName = 'row';
    this.innerHTML = `${Object.values(obj).map(e => `<td>${e.value}</td>`).join(' ')}
    <td>
      <button class='action-btn edit'>Edit</button>
      <button class='action-btn sell'>Sell</button>
    </td>`
    Object.values(obj).forEach(v => v.value = '');

    this.lastElementChild.children[0].addEventListener('click', () => {
      Object.values(obj).forEach((e, i) => e.value = this.children[i].textContent)
      this.remove()
    });
    this.lastElementChild.children[1].addEventListener('click', () => {
      const price = Number(this.children[5].textContent) - Number(this.children[4].textContent)
      const li = sellCar.call(document.createElement('li'), this.children[0].textContent, this.children[1].textContent, this.children[2].textContent, price);
      const profitPrice = Number(profit.textContent) + price;
      document.getElementById('cars-list').appendChild(li);
      profit.textContent = profitPrice.toFixed(2)
      this.remove();
    })
    return this
  }

  function sellCar(make, model, year, price){
    this.className = 'each-list'
    this.innerHTML = `<span>${make} ${model}</span>
      <span>${year}</span>
      <span>${price}</span>`
      return this
  }
}