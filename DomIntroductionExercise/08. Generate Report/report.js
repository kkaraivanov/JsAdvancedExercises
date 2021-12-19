function generateReport() {
    const input = {
        checkboxes: document.querySelectorAll("input[type='checkbox']"),
        rows: document.getElementsByTagName("tr")
    }
    const rows = Array.from(input.rows).slice(1).map(x => Array.from(x.children).map(y => y.innerHTML));
    const selectedCheckboxes = Array.from(input.checkboxes).map((x, y) => [x, y]).filter(x => x[0].checked).map(x => [x[0].name, x[1]]);
    const output = document.getElementById("output");
    output.value = JSON.stringify(rows.map(row =>
            selectedCheckboxes.reduce((x, y) => {
                const [col, index] = y;
                x[col] = row[index];
                return x;
            }, {})
        )
    )
}