function toggle() {
    let btn = document.querySelector('.button'),
        show = document.querySelector('#extra');

    if(show.style['display'] === 'none'){
        show.style['display'] = 'block';
        btn.textContent = 'Less';
    }else{
        show.style['display'] = 'none';
        btn.textContent = 'More';
    }
}