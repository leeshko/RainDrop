const gameScreen = document.querySelector('.game-screen');
const splashSound = document.querySelector('.splash');
const water = document.querySelector('.water');

let timeout;
let operators;
let maxFirstNum;
let maxSecondNum;
let dropSpeed = 50;
let callbackWaterReached;
let lives = 3;
let dropcounter = 1;

let drops = {};

export default {
    dropInitialization: initDrops,
    checkResult: checkResult,
    demoResult: demoResult
};

function initDrops(reached, generatedArr) {
    callbackWaterReached = reached;

    createOperAndNumbers(generatedArr);
    setTimeout(createDrop, 3000);
}

function createDrop() {
    const valuesInDrop = createDropContent();
    const el = createDropElement(valuesInDrop);
    const result = valuesInDrop.result;
    const obj = { element: el, timeout: null };

    if (drops[result]) {
        drops[result].push(obj);
    } else {
        drops[result] = [obj];
    }
    dropFall(obj, result);

    dropSpeed--;
    maxFirstNum++;
    maxSecondNum++;

    timeout = setTimeout(createDrop, 3000);
}

function createOperAndNumbers(generatedArr) {
    operators = generatedArr[0];
    maxFirstNum = Number.parseInt(generatedArr[1][0]);
    maxSecondNum = Number.parseInt(generatedArr[1][1]);
}

function createNumber(max, min = 0) {
    return Math.floor(Math.random() * Math.floor(max - min) + min);
}

function randomDropHorizontalPos(minLeft, maxRight) {
    return Math.random() * (maxRight - minLeft) + minLeft;
}

function createDropContent() {
    let num1 = createNumber(maxFirstNum);
    let num2;
    let resultInDrop;
    let operatorInDrop = operators[createNumber(operators.length)];

    if (operatorInDrop === '*') {
        num2 = createNumber(maxSecondNum);
        resultInDrop = num1 * num2;
    } else if (operatorInDrop === '/') {
        num2 = createNumber(maxSecondNum, 1);
        const multiplier = Math.ceil(num1 / num2);
        num1 = num2 * multiplier;
        resultInDrop = multiplier;
    } else if (operatorInDrop === '+') {
        num2 = createNumber(maxSecondNum);
        resultInDrop = num1 + num2;
    } else {
        num2 = createNumber(maxSecondNum);
        if (num1 < num2) {
            let interNum = num2;
            num2 = num1;
            num1 = interNum;
        }
        resultInDrop = num1 - num2;
    }

    return { num1, num2, operator: operatorInDrop, result: resultInDrop };
}

function createDropElement(valuesInDrop) {
    const dropElement = document.createElement('div');

    const classDrop = dropcounter % 5 ? 'drop' : 'superdrop';
    dropElement.classList.add(classDrop);

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
}

function dropFall(obj, result) {
    const dropElement = obj.element;
    const dropHeight = dropElement.offsetHeight;
    const waterLevel = gameScreen.offsetHeight - water.offsetHeight - dropHeight;
    const dropPositionTop = parseInt(dropElement.style.top) + 1;

    dropElement.style.top = dropPositionTop + 'px';

    if (dropPositionTop < waterLevel) {
        obj.timeout = setTimeout(function () {
            dropFall(obj, result);
        }, dropSpeed);
    } else {
        removeDrop(dropElement);
        drops[result].shift();

        callbackWaterReached();
        water.style.height = `${water.offsetHeight + 50}px`;
        splashSound.play();

        lives--;
        if (!lives) {
            clearTimeout(timeout);
        }
    }
}

function checkResult(result) {
    if (drops[result] && drops[result].length !== 0) {
        const elementObject = drops[result].shift();
        removeDrop(elementObject.element);
        clearTimeout(elementObject.timeout);
        
        if (elementObject.element.classList.contains('superdrop')) {
            for (let key in drops) {
                drops[key].forEach(obj => {
                    removeDrop(obj.element);
                    clearTimeout(obj.timeout);
                });
                drops[key] = [];
            }
        }
        return true;
    }
    return false;
}

function removeDrop(el) {
    if (el !== undefined) {
        el.classList.add('drop-disappearing');
        el.addEventListener('transitionend', () => el.remove());
    }
}

function demoResult() {
    let keys = Object.keys(drops);

    for (let i = 0; i < keys.length; i++) {
        if (drops[keys[i]].length !== 0) {
            return keys[i];
        }
    }
}
