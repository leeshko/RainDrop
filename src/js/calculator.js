let calculatorDisplay = document.querySelector('.display');
const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operator');
const wavesSound = document.querySelector('.waves');
let displayValue = '';   // value displayed on calc screen
let displayResult = '';  // value after pressing enter
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

function deleteDisplay() {
    displayValue = undefined;
    calculatorDisplay.innerHTML = '';
}

function clearDisplay() {
    calculatorDisplay.innerHTML = displayValue.substring(0, displayValue.length - 1);
    displayValue = calculatorDisplay.innerHTML;
}

export function calculatorPressOperator() {
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', function () {
            if (operatorButton.innerHTML === 'Delete') {
                deleteDisplay();
            } else if (operatorButton.innerHTML === 'Clear') {
                clearDisplay();
            } else if (operatorButton.innerHTML === 'Enter') {
                displayResult = calculatorDisplay.innerHTML;
                onEnterCallback(displayResult);
                deleteDisplay();
            }
        });
    });
    window.addEventListener('keydown', function (button) {
        if (button.key === 'Delete') {
            deleteDisplay();
        } else if (button.key === 'Backspace') {
            clearDisplay();
        } else if (button.key === 'Enter') {
            displayResult = calculatorDisplay.innerHTML;
            onEnterCallback(displayResult);
            deleteDisplay();
        }
    })
}

export function calculatorPressNumber() {
    numButtons.forEach(numButton => {
        numButton.addEventListener(
            'click', function () {
                if (!displayValue) {
                    calculatorDisplay.innerHTML = numButton.innerHTML;
                    displayValue = numButton.innerHTML;
                } else if (displayValue > 99) {
                    return;
                } else {
                    calculatorDisplay.innerHTML += numButton.innerHTML;
                    displayValue = calculatorDisplay.innerHTML;
                }
            })
    });
    window.addEventListener('keydown', function (button) {
        if (parseInt(button.key) || button.key === '0') {
            if (!displayValue) {
                calculatorDisplay.innerHTML = button.key;
                displayValue = button.key;
            } else if (displayValue.length > 4) {
                return;
            } else {
                calculatorDisplay.innerHTML += button.key;
                displayValue = calculatorDisplay.innerHTML;
            }
            return;
        }
    })
}

function pressEmulation(resultInDrop) {
   
    console.log(typeof resultInDrop, resultInDrop)
        let resString = resultInDrop.toString();
        setTimeout(() => {
            for (let i = 0; i < resString.length; i++) {
                const element = document.querySelector(`#btn${resString[i]}`);
                element.click();
                element.classList.add('demobutton');  
                element.addEventListener('transitionend', (() => element.classList.remove('demobutton')));   
            }
        }, 3000);

        setTimeout(() => {
            const enter = document.querySelector('#btnEnter');
            enter.classList.add('demobutton');  
            enter.addEventListener('transitionend', (() => enter.classList.remove('demobutton')));
            enter.click();

        }, 3500);
    
    // displayResult += btn1.innerHTML;
    // console.log(displayResult)
    // // calculatorDisplay.innerHTML = displayValue;


    //    displayResult = calculatorDisplay.innerHTML;
    //                 onEnterCallback(displayResult);
    //                 deleteDisplay();

}