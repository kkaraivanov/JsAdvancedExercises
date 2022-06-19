class Contact{
    //first name, last name, phone, email, and property that indicates if the contact is online or not
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.phone = phone,
        this.email = email,
        this._online = false
    }

    set online(value) {
        this._online = value;
        if (this.title) {
            if (value === true) { 
                this.title.classList.add('online');
            } else {
                this.title.classList.remove('online');
            }
        }
    }

    get online() {
      return this._online;
    }
    //appends the Contact's HTML element representation to the DOM element with Id equal to the argument
    render(id){
        //create elements
        let article = document.createElement('article');
        let title = document.createElement('div');
        let button = document.createElement('button');
        let info = document.createElement('div');
        let spanPhone = document.createElement('span');
        let spanEmail = document.createElement('span');

        // set elements value and properties
        title.className = 'title';
        title.textContent = this.firstName + ' ' + this.lastName;
        title.className = this._online ? 'title onlite' : 'title';
        button.innerHTML = '&#8505;';
        info.className = 'info';
        info.style.display = 'none';
        spanPhone.innerHTML = '&phone; ' + this.phone;
        spanEmail.innerHTML = '&#9993; ' + this.email;
        
        // append elements
        this.title = title;
        title.appendChild(button);
        info.appendChild(spanPhone);
        info.appendChild(spanEmail);
        article.appendChild(title);
        article.appendChild(info);
        button.addEventListener('click', () => {
            info.style.display = (info.style.display == 'none') ? 'block' : 'none';
        });

        // append article to id
        document.getElementById(id).appendChild(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);  