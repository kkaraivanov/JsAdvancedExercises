function notify(message) {
    const note = document.getElementById('notification')
    note.textContent = message;
    note.style.display = 'block'
    note.style.cursor = 'pointer'
    note.addEventListener('click', (e) =>{
      e.target.style.display = 'none'
    })
}