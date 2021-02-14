const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operator');
const calculatorDisplay = document.querySelector('.display');

let displayValue = ''; 
let onEnterCallback;

export default {
    init: initCalculator,
    pressEmulation: pressEmulation
};

function initCalculator(onEnter) {
    onEnterCallback = onEnter;
    calculatorPressNumber();
    calculatorPressOperator();
}

function pressEmulation(resultInDrop) {
    if (resultInDrop === undefined) { return; }

    let resString = resultInDrop.toString();
    setTimeout(() => clickEmulation(resString), 3000);
    setTimeout(clickEnterEmulation, 3500);
}

function clickEmulation(resString) {
    for (let i = 0; i < resString.length; i++) {
        const element = document.querySelector(`#btn${resString[i]}`);
        element.click();
        element.classList.add('demobutton');
        element.addEventListener('transitionend', (() => element.classList.remove('demobutton')));
    }
}

function clickEnterEmulation() {
    const enter = document.querySelector('#btnEnter');
    enter.classList.add('demobutton');
    enter.addEventListener('transitionend', (() => enter.classList.remove('demobutton')));
    enter.click();
}

function calculatorPressOperator() {
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', () => pressOperatorButton(operatorButton.innerHTML));
    });
    window.addEventListener('keydown', (button) => pressOperatorButton(button.key));
}

function pressOperatorButton(button) {
    if (button === 'Delete') {
        deleteDisplay();
    } else if (button === 'Backspace' || button === 'Clear') {
        clearDisplay();
    } else if (button === 'Enter') {
        onEnterCallback(calculatorDisplay.innerHTML);
        deleteDisplay();
    }
}

function deleteDisplay() {
    displayValue = '';
    calculatorDisplay.innerHTML = '';
}

function clearDisplay() {
    calculatorDisplay.innerHTML = displayValue.substring(0, displayValue.length - 1);
    displayValue = calculatorDisplay.innerHTML;
}

function calculatorPressNumber() {
    numButtons.forEach(numButton => {
        numButton.addEventListener('click', () => pressNumber(numButton.innerHTML));
    });
    window.addEventListener('keydown', (button) => {
        if (!parseInt(button.key) && button.key !== '0') { return; }
        pressNumber(button.key);
    });
}

function pressNumber(button) {
    if (displayValue.length < 5) {
        calculatorDisplay.innerHTML += button;
        displayValue = calculatorDisplay.innerHTML;
    }
}