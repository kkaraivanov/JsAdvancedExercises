function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type=button]');
    const inputs = document.querySelectorAll('input[type=text]');

    [...buttons].forEach(el => {
        el.addEventListener('click', onClick);
    });

    const obj = (days, hours, minutes, seconds) => ({
        days,
        hours,
        minutes,
        seconds
    });

    const dt = {
        days: d => obj(d, d * 24, d * 1440, d * 86400),
        hours: h => obj(h / 24, h, h * 60, h * 3600),
        minutes: m => obj(m / 1440, m / 60, m, m * 60),
        seconds: s => obj(s / 86400, s / 3600, s / 60, s)
    }

    function onClick(e) {
        const input = e.target.previousElementSibling;
        const convert = dt[input.id](input.value);
        [...inputs].map(x => x.value = convert[x.id]);
    }
}