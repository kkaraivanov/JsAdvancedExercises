function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      const searchField = document.getElementById('searchField');
      const table = [...document.querySelector('.container tbody').getElementsByTagName('tr')];
      const markCss = 'select';
      let markCssExist = document.querySelector(`.${markCss}`) !== null;
      let fildIsEmpty = searchField.value.trim().match(/^ *$/) === null;
      
      if(fildIsEmpty && markCssExist){
         refresh(searchField, table)
      }else{
         for(let row of table){
            let [col1, col2, col3] = row.getElementsByTagName('td');
            let c1 = equal(col1.textContent, searchField.value),
               c2 = equal(col2.textContent, searchField.value),
               c3 = equal(col3.textContent, searchField.value);
            
            if(c1 || c2 || c3){
               row.classList.add(markCss);
            }
         }
      }
   }

   function equal(...input){
      let [word, search] = input;
      return String(word).includes(search);
   }

   function refresh(...elements){
      let [field, table] = elements;
      field.value = '';
      for(let row of table){
         row.classList.remove('select');
      }
   }
}