import calculator from './js/calculator';
import drop from './js/drop';
import './css/style.css';

const demoButton = document.querySelector('.intro-button');
const startButton = document.querySelector('.start-button');
const screenFirst = document.querySelector('.intro');
const screenSecond = document.querySelector('.game');
const scorePanel = document.querySelector('.scores');

let screenResult;
let dropResult;
let scoreCounter = 0;



function startGame() {
    screenFirst.classList.add('hide');
    screenSecond.classList.remove('hide');
    calculator.init(reactOnEnter);
    drop.dropInitialization(valueInDrop);

    
}


function reactOnEnter(result) {
    screenResult = parseInt(result);
    compareResult();
}



function valueInDrop(valueOfEquation) {
    dropResult = valueOfEquation;
}


//возможно эти две функции объединить, дать одной функции два этих параметра, 
//и потом в этой же функции из сравнить??


function compareResult() {
    
    const dropElement = document.querySelector('.drop');
    
    if (dropResult === screenResult) {
        scoreCounter += 10;
        scorePanel.innerHTML = scoreCounter;
        dropElement.classList.add('drop-disappearing');
    } else {
        scoreCounter -= 10;
        scorePanel.innerHTML = scoreCounter;
    }
}


demoButton.addEventListener('click', console.log('DEMO'));
startButton.addEventListener('click', startGame);


function test() {               //simply for test
    console.log('test');
}