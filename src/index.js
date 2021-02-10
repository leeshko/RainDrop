import startScreen  from './js/startScreen';
import calculator   from './js/calculator';
import drop         from './js/drop';
import scorePanel   from './js/scorePanel';
import finalscreen  from './js/finalscreen';
import './css/style.css';

const wavesSound = document.querySelector('.waves');

startScreen.init(startGame);
startScreen.initDemo(startDemo);
startScreen.fullScreen();

function startGame() {
    wavesSound.play();                         /////// SWITCH ON
    calculator.init(reactOnEnter);
    drop.dropInitialization();
    drop.reachedWater(reactOnWater); 
    scorePanel.gameOver(finishGame);
}

function startDemo() {
    wavesSound.play();                          /////// SWITCH ON
    calculator.init(reactOnEnter);
    drop.dropInitialization();
    
    setInterval(() => {
        const result = drop.demoResult();
        calculator.pressEmulation(result);
    }, 3000);
   
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
    wavesSound.pause();
}