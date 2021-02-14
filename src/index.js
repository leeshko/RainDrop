import startScreen from './js/startScreen';
import options from './js/options';
import calculator from './js/calculator';
import drop from './js/drop';
import scorePanel from './js/scorePanel';
import finalscreen from './js/finalscreen';
import './css/style.css';

const wavesSound = document.querySelector('.waves');
let interval;

startScreen.init(startGame, startDemo);

function startGame() {
    options.createOptions(reactOnArray);
}

function reactOnArray(array) {
    wavesSound.play();
    drop.dropInitialization(reactOnWater, array);
    calculator.init(reactOnEnter);
    scorePanel.init(finishGame);
}

function startDemo() {
    options.createOptions(reactOnArray);

    interval = setInterval(() => {
        const result = drop.demoResult();
        calculator.pressEmulation(result);
    }, 4000);
}

function reactOnEnter(result) {
    const screenResult = parseInt(result);
    compareResult(screenResult);
}

function compareResult(screenResult) {
    if (drop.checkResult(screenResult)) {
        scorePanel.increaseScore();
    } else {
        scorePanel.decreaseScore();
    }
}

function reactOnWater() {
    scorePanel.wastedLife();
}

function finishGame() {
    finalscreen.createStat();
    wavesSound.pause();
    if (interval) {
        clearInterval(interval);
    }
}