function attachEventsListeners() {
    const elements = {
        btn: Array.from(document.querySelectorAll("input[type='button']")),
        fields: Array.from(document.querySelectorAll("input[type='text']"))
    };
    const timeObjects = (days, hours, minutes, seconds) => ({
        days,
        hours,
        minutes,
        seconds
    })
    const timeTypes = {
        days: d => timeObjects(d, d * 24, d * 1440, d * 86400),
        hours: h => timeObjects(h / 24, h, h * 60, h * 3600),
        minutes: m => timeObjects(m / 1440, m / 60, m, m * 60),
        seconds: s => timeObjects(s / 86400, s / 3600, s / 60, s)
    }

    elements.btn.forEach(btn => {
        btn.addEventListener('click', () => {
            let [timeType, value] = [btn.previousElementSibling.id, btn.previousElementSibling.value];
            let time = timeTypes[timeType](value);

            elements.fields.map(t => (t.value = time[t.id]));
        })
    });
}