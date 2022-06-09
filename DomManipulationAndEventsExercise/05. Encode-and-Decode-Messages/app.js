function encodeAndDecodeMessages() {
    const action = (s, t = 'decode') => s.split('').map(x =>
        String.fromCharCode(t === 'encode' ? x.charCodeAt(0) + 1 : x.charCodeAt(0) - 1)
    ).join('');
    const container = document.querySelector('#container');
    const [encode, decode] = container.querySelectorAll('textarea');
    
    container.addEventListener('click', e => {
        if(e.target.tagName === "BUTTON"){
            if(e.target.textContent.includes("Encode")) {
                decode.value = action(encode.value, 'encode');
                encode.value = '';
            }else{
                decode.value = action(decode.value);
            }
        }
    })
}