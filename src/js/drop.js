const gameScreen = document.querySelector('.game-screen');
const scorePanel = document.querySelector('.scores');
const operators = ['+', '-', '*', '/'];
const maxFirstNum = 10;
const maxSecondNum = 10;
let dropSpeed = 10;
let resultInDrop;
let num2;   
let scoreCounter = 0;   
let dropValueCallback;  
const dropElement = document.createElement('div'); //это вынес сюда, чтобы была видна со всех функций. 
                                                    // чувствую, ты скажешь, что это неправильно
let dropPositionTop = `-${dropElement.offsetHeight}`;
const water = document.querySelector('.water');
let waterLevel = window.innerHeight - water.offsetHeight - water.offsetHeight;

export default {
    drop: initDrops
}

function initDrops(dropValue) {
    dropValueCallback = dropValue;
    createDrop();
}


function createNumber(value) {
    return Math.floor(Math.random() * Math.floor(value))
};

//Drops Position

function randomDropHorizontalPos(minLeft, maxRight) {                           //Drops Random
    return Math.random() * (maxRight - minLeft) + minLeft;
}

function createDrop() {
    let operatorInDrop = operators[createNumber(4)];
    let num1 = createNumber(maxFirstNum);

    if (operatorInDrop === '*') {
        num2 = createNumber(maxSecondNum);
        resultInDrop = (num1 * num2);
    } else if (operatorInDrop === '/') {        
        do {
            num2 = createNumber(maxSecondNum);
        }
        while (num1 % num2 !== 0)
        resultInDrop = num1 / num2;
    } else if (operatorInDrop === '+') {
        num2 = createNumber(maxSecondNum);
        resultInDrop = (num1 + num2);
    } else {
        do {
            num2 = createNumber(maxSecondNum);
        }
        while (num1 < num2)
        resultInDrop = num1 - num2;
    }

    dropElement.classList.add('drop');

    const operatorElement = document.createElement('div');
    operatorElement.classList.add('sign');
    operatorElement.innerHTML = operatorInDrop;

    const numbersElement = document.createElement('div');
    numbersElement.classList.add('numbers');

    const firstNumberElement = document.createElement('div');
    firstNumberElement.classList.add('firstNum');
    firstNumberElement.innerHTML = num1;

    const secondNumberElement = document.createElement('div');
    secondNumberElement.classList.add('secondNum');
    secondNumberElement.innerHTML = num2;
    gameScreen.prepend(dropElement);
    dropElement.prepend(operatorElement);
    dropElement.append(numbersElement);
    numbersElement.append(firstNumberElement);
    numbersElement.append(secondNumberElement);
    
    dropElement.style.left = `${randomDropHorizontalPos(0, gameScreen.clientWidth - dropElement.offsetWidth)}px`;      
    
    dropValueCallback(resultInDrop);

    dropFall(); 
}

function compareResult(){                             
    let calculatorValue = parseInt(sessionStorage.getItem('displayResult'));    
    if (resultInDrop === calculatorValue) {
        scoreCounter += 10;
        scorePanel.innerHTML = scoreCounter;        
        dropElement.classList.add('drop-disappearing');   
    } else {
        scoreCounter -= 10;
        scorePanel.innerHTML = scoreCounter; 
    }
}

function dropFall () {
    dropElement.style.top = dropPositionTop + 'px';
    dropPositionTop++;
    
    if (dropPositionTop < waterLevel) {
        setTimeout(function () {
            dropFall();
        }, dropSpeed);
    } else {
        dropElement.classList.add('drop-disappearing');
        dropElement.addEventListener('transitionend', function() {      // we need this?
            dropElement.style.display = 'none'; // сами по себе в коде элементы так и остаются, это норм? хотя инспект по ним не делается вроде
        });
    }
};
