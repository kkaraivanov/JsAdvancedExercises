function lockedProfile() {
    document.getElementById('main').addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const isChecked = e.target.parentNode.querySelector('input[type=radio]:checked').value === 'unlock';
            
            if (isChecked) {
                const b = e.target;
                const d = e.target.parentNode.querySelector('div');
                if (b.textContent == 'Hide it') {
                    d.style.display = 'none';
                    b.textContent = 'Show more';
                } else {
                    d.style.display = 'block'
                    b.textContent = 'Hide it';
                }
            }
        }
    })
}