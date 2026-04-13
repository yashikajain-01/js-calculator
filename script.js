const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'AC') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
                display.value = eval(expression);
            } catch {
                display.value = 'Error';
            }
        } else if (value === '%') {
            try {
                display.value = parseFloat(display.value) / 100;
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});