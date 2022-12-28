const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';

        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);

        //si el resultado es un número entero, se mostrará sin decimales 
        // si el resultado es un número decimal, se mostrarán los primeros 4 decimales 
        }  else if (display.innerText != '' && item.id == 'equal') {
            let result = eval(display.innerText);
            if (Number.isInteger(result)) {
                display.innerText = result;
            } else {
                display.innerText = result.toFixed(2);
            }

        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);

        } else {
            display.innerText += item.id;
        }
    }
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculadora = document.querySelector('.calculadora');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

themeToggleBtn.onclick = () => {
    calculadora.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
