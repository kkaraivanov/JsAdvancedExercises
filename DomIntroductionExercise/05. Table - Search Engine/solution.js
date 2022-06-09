function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const selectCss = 'select';

   function onClick() {
      const searchField = document.getElementById('searchField');
      const table = [...document.querySelector('.container tbody').getElementsByTagName('tr')];
      let selectExist = document.querySelector(`.${selectCss}`) !== null;
      let fildIsEmpty = searchField.value.trim().match(/^ *$/) === null;

      if(selectExist && fildIsEmpty){
         refresh(searchField, table);
      }else {
         for (const row of table) {
            if(isEqual(row, searchField)) {
               row.classList.add(selectCss);
            }
         }
      }
   }

   function equal(...input){
      let [word, search] = input;
      return String(word).includes(search);
   }

   function search(c, s){
      return equal(c.textContent, s.value);
   }

   function isEqual(row, fild){
      let [a, b, c] = row.getElementsByTagName('td');
      return search(a, fild) || search(b, fild) || search(c, fild)
   }

   function refresh(...elements){
      let [field, table] = elements;
      field.value = '';
      for(let row of table){
         row.classList.remove(selectCss);
      }
   }
}