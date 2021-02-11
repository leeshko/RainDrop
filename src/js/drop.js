
const gameScreen = document.querySelector('.game-screen');
const splashSound = document.querySelector('.splash');           // UNCOMMENT
const wavesSound = document.querySelector('.waves');
const water = document.querySelector('.water');
let operators;
let maxFirstNum;
let maxSecondNum;
let dropSpeed = 50;
let callbackWaterReached;
let isGameover = false;
let lives = 3;
let dropcounter = 1;

let drops = {};

export default {
    dropInitialization: initDrops,
    checkResult: checkResult,
    reachedWater: reachedWater,
    demoResult: demoResult,
    createOperAndNumbers: createOperAndNumbers
};

function initDrops() {

    const func = () => {
        const valuesInDrop = createDropContent();
        const el = createDropElement(valuesInDrop);
        const result = valuesInDrop.result;
        const timeout = setTimeout(func, 3000);
        const obj = { element: el, timeout: null };
        if (drops[result]) {
            drops[result].push(obj);
        } else {
            drops[result] = [obj];
        }
        dropFall(obj);
        dropSpeed--;
        maxFirstNum++;
        maxSecondNum++;
    }
    setTimeout(func, 3000);
}

function createNumber(value) {
    return Math.floor(Math.random() * Math.floor(value));
};

//Drops Position

function randomDropHorizontalPos(minLeft, maxRight) {                           //Drops Random
    return Math.random() * (maxRight - minLeft) + minLeft;
}

function createDropContent() {
    const generatedValues = createOperAndNumbers();   // в этом месте что-то не бьет
    let num1 = createNumber(generatedValues.maxFirstNum);
    console.log(num1)
    let num2;
    let resultInDrop;
    console.log(num1)
    let operatorInDrop = generatedValues.operators[createNumber(generatedValues.operators.length)];
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
    return { num1, num2, operator: operatorInDrop, result: resultInDrop };
}

function createDropElement(valuesInDrop) {

    if (isGameover === false && dropcounter % 2 !== 0) {

        const dropElement = document.createElement('div');
        dropElement.classList.add('drop');

        const operatorElement = document.createElement('div');
        operatorElement.classList.add('sign');
        operatorElement.innerHTML = valuesInDrop.operator;

        const numbersElement = document.createElement('div');
        numbersElement.classList.add('numbers');

        const firstNumberElement = document.createElement('div');
        firstNumberElement.classList.add('firstNum');
        firstNumberElement.innerHTML = valuesInDrop.num1;

        const secondNumberElement = document.createElement('div');
        secondNumberElement.classList.add('secondNum');
        secondNumberElement.innerHTML = valuesInDrop.num2;
        gameScreen.prepend(dropElement);
        dropElement.prepend(operatorElement);
        dropElement.append(numbersElement);
        numbersElement.append(firstNumberElement);
        numbersElement.append(secondNumberElement);

        const dropHeight = dropElement.offsetHeight;
        dropElement.style.left = `${randomDropHorizontalPos(0, gameScreen.clientWidth - dropElement.offsetWidth)}px`;
        dropElement.style.top = -dropHeight + 'px';
        dropcounter++;
        return dropElement;
    } else if (isGameover === false && dropcounter % 2 === 0) {
        const dropElement = document.createElement('div');
        dropElement.classList.add('superdrop');

        const operatorElement = document.createElement('div');
        operatorElement.classList.add('sign');
        operatorElement.innerHTML = valuesInDrop.operator;

        const numbersElement = document.createElement('div');
        numbersElement.classList.add('numbers');

        const firstNumberElement = document.createElement('div');
        firstNumberElement.classList.add('firstNum');
        firstNumberElement.innerHTML = valuesInDrop.num1;

        const secondNumberElement = document.createElement('div');
        secondNumberElement.classList.add('secondNum');
        secondNumberElement.innerHTML = valuesInDrop.num2;
        gameScreen.prepend(dropElement);
        dropElement.prepend(operatorElement);
        dropElement.append(numbersElement);
        numbersElement.append(firstNumberElement);
        numbersElement.append(secondNumberElement);

        const dropHeight = dropElement.offsetHeight;
        dropElement.style.left = `${randomDropHorizontalPos(0, gameScreen.clientWidth - dropElement.offsetWidth)}px`;
        dropElement.style.top = -dropHeight + 'px';
        dropcounter++;
        return dropElement;
    } else if (isGameover === true) {
        wavesSound.pause();
        return;
    }
}

function dropFall(obj) {

    const dropElement = obj.element;
    const dropHeight = dropElement.offsetHeight;
    let waterLevel = gameScreen.offsetHeight - water.offsetHeight - dropHeight;
    let dropPositionTop = parseInt(dropElement.style.top);

    dropPositionTop++;
    dropElement.style.top = dropPositionTop + 'px';

    if (dropPositionTop < waterLevel) {
        obj.timeout = setTimeout(function () {
            dropFall(obj);
        }, dropSpeed);
    } else {

        removeDrop(dropElement);
        callbackWaterReached();
        splashSound.play();
        // подчистить в дропs
        clearTimeout(obj.timeout);
        // obj.timeout = null;                                  // ///*** */
        water.style.height = `${water.offsetHeight + 50}px`;
        lives--;
        if (!lives) {
            isGameover = true;
        }
    }
}

function checkResult(result) {

    if (drops[result] && drops[result].length !== 0) {
        const elementObject = drops[result].shift();

        if (elementObject.element.classList.contains('superdrop')) {
            removeDrop(elementObject.element, elementObject.timeout);
            clearTimeout(elementObject.timeout);
            for (let key in drops) {
                drops[key].forEach(obj => removeDrop(obj.element));
            }
        } else {
            removeDrop(elementObject.element, elementObject.timeout);
            clearTimeout(elementObject.timeout);
            return true;
        }
    }
    return false;
}

function removeDrop(el) {
    el.classList.add('drop-disappearing');
    el.addEventListener('transitionend', (() => el.remove()));
}

function reachedWater(reached) {
    callbackWaterReached = reached;
}


function demoResult() {
    let keys = Object.keys(drops);
    drops[keys[0]] = undefined;
    drops = JSON.parse(JSON.stringify(drops));
    // console.log('keys[0]', keys[0]);         // периодически undefined
    return keys[0];
}

function createOperAndNumbers(generatedArr) {
    operators = generatedArr[0];
    maxFirstNum = Number.parseInt(generatedArr[1][0]);
    maxSecondNum = Number.parseInt(generatedArr[1][1]);
    return {operators, maxFirstNum, maxSecondNum};
}