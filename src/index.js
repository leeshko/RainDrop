import startScreen from './js/startScreen';
import calculator from './js/calculator';
import drop from './js/drop';
import scorePanel from './js/scorePanel';
import './css/style.css';
import finalscreen from './js/finalscreen';
const wavesSound = document.querySelector('.waves');

startScreen.init(startGame);

function startGame() {
    wavesSound.play()
    calculator.init(reactOnEnter);
    drop.dropInitialization();
    drop.reachedWater(reactOnWater); 
    scorePanel.gameOver(finishGame);
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

function reactOnWater(){
    scorePanel.wastedLife(); 
}

function finishGame() {
    finalscreen.createStat();
}