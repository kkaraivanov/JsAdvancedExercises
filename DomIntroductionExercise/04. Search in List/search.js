function search() {
   let search = document.getElementById('searchText'),
      result = document.querySelector('#result'),
      matches = 0;

   if(search !== null && search.value.trim().match(/^ *$/) === null){
      let arr = [...$('#towns li')];
      for(let element of arr){
         if(element.textContent.includes(search.value)){
            element.style['font-weight'] = 'bold';
            matches++;
         }
      }
   }

   if(matches !== 0) result.textContent = `${matches} matches found`;
}
