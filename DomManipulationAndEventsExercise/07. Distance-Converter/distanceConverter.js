function attachEventsListeners() {
    const [input, output] = document.querySelectorAll('input[type=text]')
    const [inputs, outputs] = document.querySelectorAll('select')
    const values = {
        km: 1,
        m: 1000,
        cm: 100000,
        mm: 1000000,
        mi: 0.621371,
        yrd: 1093.61,
        ft: 3280.84,
        in: 39370.1,
    }
    const convert = (x, y, str) => {
        let obj = {
            '/': (a, b) => a / b,
            '*': (a, b) => a * b
        };
        return obj[str](x, y);
    }

    document.getElementById('convert').addEventListener('click', () => {
        [from, to, dist] = [inputs.value, outputs.value, input.value];
        output.value = convert(convert(dist, values[from], '/'), values[to], '*')
    })
}