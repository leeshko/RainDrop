import startScreen from './js/startScreen';
import calculator from './js/calculator';
import drop from './js/drop';
import scorePanel from './js/scorePanel';
import './css/style.css';

startScreen.init(startGame);

function startGame() {
    calculator.init(reactOnEnter);
    drop.dropInitialization();
    
}

function reactOnEnter(result) {
    const screenResult = parseInt(result);
    compareResult(screenResult);
}

function compareResult(screenResult) {
    if (drop.checkResult(screenResult)) {
        scorePanel.increaseScore();
    } else {
       scorePanel.decreaseHealth();
    }
}



function reachedWater(){
    if(drop.reachedWater) {
    console.log('reached')
    }
    return;
    
    scorePanel.wastedLife();
}