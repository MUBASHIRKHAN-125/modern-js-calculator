
let input = document.querySelector('#inputcal');

let calculatorTr = document.querySelectorAll('tr');

const arrayfrom = Array.from(calculatorTr);

function calc(x, y, ope) {
    if (ope === "+") {
     return x + y;
    }
  
    if (ope === "-") {
        return x - y;
    }
  
    if (ope === "x") {
        return x * y;
    }
  
    if (ope === "/") {
        return x / y;
    }
  }
arrayfrom.forEach(list => {

    list.addEventListener('click', (e) => {

        const clickedRow = e.target.innerText;
        input.value += clickedRow;

        if(clickedRow === '='){
        
         const match = input.value.match(/x/g)
        if(match){
            const x = Number(match[1]);
            const ope = match[2];
            const y = Number(match[3]);

            const result = calc(x , y , ope)
            input.value = result;
        }
        }
    });
});






