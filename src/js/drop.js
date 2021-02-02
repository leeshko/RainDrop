const gameScreen = document.querySelector('.game-screen');

let dropElement;
const operators = ['+', '-', '*', '/'];
const maxFirstNum = 10;
const maxSecondNum = 10;
let dropSpeed = 10;
let resultInDrop;
let num1 = createNumber(maxFirstNum);
let num2;
let operatorInDrop = operators[createNumber(4)];

let dropValueCallback;
const water = document.querySelector('.water');
let dropHeight;
let dropPositionTop;

export default {
    dropInitialization: initDrops
}

function initDrops(dropValue) {
    dropValueCallback = dropValue;
    
    // const func = () => {
        createDropContent();
        createDropElement();
        dropFall();
    //     setTimeout (func, 3000);  
    // }
    // setTimeout(func, 3000);
}
    
    


function createNumber(value) {
    return Math.floor(Math.random() * Math.floor(value))
};

//Drops Position

function randomDropHorizontalPos(minLeft, maxRight) {                           //Drops Random
    return Math.random() * (maxRight - minLeft) + minLeft;
}


function createDropContent() {

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
    dropValueCallback(resultInDrop);
}

function createDropElement() {

    dropElement = document.createElement('div');
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

    //start position
    dropHeight = dropElement.offsetHeight;
    dropElement.style.left = `${randomDropHorizontalPos(0, gameScreen.clientWidth - dropElement.offsetWidth)}px`;
    dropElement.style.top = -dropHeight + 'px'; //delete - & /2
    dropPositionTop = parseInt(dropElement.style.top);
}

function dropFall() {
    let waterLevel = gameScreen.offsetHeight - water.offsetHeight - dropHeight;

    dropPositionTop++;
    dropElement.style.top = dropPositionTop + 'px';
    if (dropPositionTop < waterLevel) {
        setTimeout(function () {
            dropFall();
        }, dropSpeed);
    } else {
        dropElement.classList.add('drop-disappearing');
        dropElement.addEventListener('transitionend', function () {      // we need this?
            dropElement.style.display = 'none'; // сами по себе в коде элементы так и остаются, это норм? хотя инспект по ним не делается вроде
        });
    }
};
