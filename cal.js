
let input = document.querySelector('#inputcal');

let calculatorTr = document.querySelectorAll('tr');

function calc(x, y, ope) {
    if (ope === "+") return x + y;
    if (ope === "-") return x - y;

    if (ope === "x") return x * y;

    if (ope === "/") return x / y;

    if (ope === "%") {
        if (x > y) {
            return x % y;
        } else {
            return y % x;
        }
    };
}
calculatorTr.forEach(list => {

    list.addEventListener('click', (e) => {
        const clickedRow = e.target.innerText;

        if (clickedRow !== "DEL" && clickedRow !== "=") {
            input.value += clickedRow;
        }

        if (clickedRow === '=') {

            const matched = input.value.match(/(\d+)([\-+x%\/])(\d+)/);

            if (matched) {
                const x = Number(matched[1]);
                const ope = matched[2];
                const y = Number(matched[3]);
                const result = calc(x, y, ope)
                input.value = result;
            }
            else {
                input.value = "Math error";
            }
        }
        if (clickedRow === 'AC') {
            input.value = "";
        };
        if (clickedRow === "DEL") {
            input.value = input.value.slice(0, -1);
        }
    });
});






