const gameScreen = document.querySelector('.game-screen');
const operators = ['+', '-', '*', '/'];
const maxFirstNum = 99;
const maxSecondNum = 99;

let num1 = createNumber(maxFirstNum);
let num2 = createNumber(maxSecondNum);


function createNumber(value) {
    return Math.floor(Math.random() * Math.floor(value))
};

const operatorInDrop = operators[createNumber(4)];

//Drops Position

function randomDropHorizontalPos(minLeft, maxRight) {                           //Drops Random
    return Math.random() * (maxRight - minLeft) + minLeft;
}

export function createDrop() {
    const dropElement = document.createElement('div');
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
    dropElement.style.top = '-10px';                    //why this values are not available from string 54 
    dropElement.style.left = `${randomDropHorizontalPos(0, gameScreen.clientWidth - 100)}px`;   // 100px - drop size   

    gameScreen.prepend(dropElement);
    dropElement.prepend(operatorElement);
    dropElement.append(numbersElement);
    numbersElement.append(firstNumberElement);
    numbersElement.append(secondNumberElement);


    ///////////////////////////////////////////////////////////// insert falling
    const water = document.querySelector('.water');
    let waterLevel = window.innerHeight - water.offsetHeight - water.offsetHeight;
    const dropSpeed = 10;
    let count = 0;

    const dropFall = () => {
        dropElement.style.top = count + 'px';
        count++;

        if (count < waterLevel) {
            setTimeout(function () {
                dropFall();
            }, dropSpeed);
        }
    };

    dropFall();

    //////////////////////////////////////////////////////////////////////////

    if (operatorInDrop === '*') {
        return (num1 * num2);
    } else if (operatorInDrop === '/') {        //have no idea how to make numbers in definite range
        return (num1 / num2);
    } else if (operatorInDrop === '+') {
        return (num1 + num2);
    } else {
        return (num1 - num2);
    }

    // console.log(water.offsetHeight)                           //расскажи подробнее по поводу момента отрисовки высоты блока с водой

}


