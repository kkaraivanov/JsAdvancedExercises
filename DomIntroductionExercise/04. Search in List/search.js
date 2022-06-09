function search() {
   let search = document.getElementById('searchText'),
      result = document.querySelector('#result'),
      count = 0;
   if(search !== null && search.value.trim().match(/^ *$/) === null){
      const list = [...$('#towns li')];
      for (let item of list) {
         
         if(item.textContent.includes(search.value)){
            item.style.cssText = 'font-weight: bold; text-decoration: underline;';
            count++;
         }else{
            item.style.cssText = 'font-weight: normal; text-decoration: none;';
         }
      }
   }
   
   if(count !== 0) result.textContent = `${count} matches found`;
}