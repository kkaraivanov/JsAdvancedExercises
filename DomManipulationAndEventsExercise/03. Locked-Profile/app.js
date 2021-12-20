function lockedProfile() {
    const show = (btn, content) => {
        if (btn.innerHTML === 'Show more') {
            btn.innerHTML = 'Hide it';
            content.style.display = 'block';
        } else {
            btn.innerHTML = 'Show more';
            content.style.display = 'none';
        }
    }
    
    document.getElementById('main').addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON') {
            const parent = event.target.parentNode;
            const isUnlocked = parent.querySelector("input[type=radio]:checked").value === 'unlock';

            if (isUnlocked) {
                let btn = event.target;
                let content = parent.querySelector('div');
                show(btn, content)
            }
        }
    })
}