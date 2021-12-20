function create(words) {
   const elements = [];
   const output = document.getElementById("content");

   function createElement(tag, content = ""){
      let element = document.createElement(tag);
      element.innerHTML = content;

      return element;
   }

   words.forEach(element => {
      let div = createElement('div');
      let p = createElement('p', element);
      p.style.display = "none"

      div.appendChild(p);
      div.addEventListener("click", () => (p.style.display = "block"));
      elements.push(div);
   });
   
   elements.forEach(element => output.appendChild(element));
}