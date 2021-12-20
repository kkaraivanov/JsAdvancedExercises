function encodeAndDecodeMessages() {
    const [encode, decode] = document.querySelectorAll("textarea");
    const encodeOrDecode = (str, type) => str.split("").map(x =>
            String.fromCharCode(type === "encode" ? x.charCodeAt(0) + 1 : x.charCodeAt(0) - 1)
        ).join("");

    document.addEventListener('click', event => {
        if(event.target.tagName === "BUTTON"){
            if (event.target.textContent.includes("Encode")) {
                decode.value = encodeOrDecode(encode.value, "encode");
                encode.value = ""
            } else {
                decode.value = encodeOrDecode(decode.value, "decode");
            }
        }
    })
}