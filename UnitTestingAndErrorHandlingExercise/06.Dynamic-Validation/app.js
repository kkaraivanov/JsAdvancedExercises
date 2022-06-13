function validate() {
    const pattern = new RegExp('^[a-z]+@[a-z]+\\.[a-z]+')
    const field = document.getElementById('email');
    field.addEventListener('change', (e) => {
        if(!pattern.test(field.value)){
            field.classList.add('error')
        }else{
            field.classList.remove('error')
        }
    })
}