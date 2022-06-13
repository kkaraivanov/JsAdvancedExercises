function validate() {
    document.querySelector('#company').addEventListener('change', (e) => document.querySelector('#companyInfo').style.display = e.target.checked ? ' block' : 'none');
    document.querySelector('#submit').addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        let passwordIsValid = /^\w{5,15}$/.test(password.value);
        passwordIsValid = passwordIsValid && (confirmPassword.value === password.value)
        const result = [];
        result.push(setBorder(username, /^[a-zA-Z0-9]{3,20}$/.test(username.value)));
        result.push(setBorder(email, /^[^@.]+@[^@]*\.[^@]+$/.test(email.value)));
        result.push(setBorder(password, passwordIsValid));
        result.push(setBorder(confirmPassword, passwordIsValid));
        
        const companyCheck = document.getElementById('company');
        let resultIsValid = false;
        if (companyCheck.checked) {
            const companyNumber = document.getElementById('companyNumber');
            resultIsValid = /^[0-9]{4}$/.test(companyNumber.value);
            result.push(setBorder(companyNumber, resultIsValid));
        }
        resultIsValid = !companyCheck.checked || (companyCheck.checked && resultIsValid);
        resultIsValid = resultIsValid && !result.filter(x => !x).length;
        const valid = document.getElementById('valid');
        resultIsValid ? valid.style.display = 'block' : valid.style.display = 'none'
    })

    function setBorder(e, isTrue){
        isTrue ? e.style.border = 'none' : e.style.border = 'solid red';
        return isTrue;
    }
}