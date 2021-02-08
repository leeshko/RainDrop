const scorePanel = document.querySelector('.scores');
const correctSound = document.querySelector('.correct');
const errorSound = document.querySelector('.error');

let bonusScore = 10;
let currentScore = 0;
let childrenIndex = 2;
let callBackGameOver;


export default {
    increaseScore: increaseScore,
    decreaseScore: decreaseScore,
    wastedLife: wastedLife,
    gameOver: gameOver
};

function increaseScore() {
    currentScore += bonusScore;
    scorePanel.innerHTML = currentScore;
    bonusScore++;
    correctSound.play();
}

function decreaseScore() {
    bonusScore = 10;
    errorSound.play();
}

function wastedLife() {
    lives.children[childrenIndex].style = 'visibility: hidden';
    if (childrenIndex > 0) {
        childrenIndex--;
        currentScore = scorePanel.innerHTML;
        currentScore = currentScore > 4 ? currentScore -= 5 : currentScore = 0;
        scorePanel.innerHTML = currentScore;
    } else {
        callBackGameOver();
    }    
}

function gameOver (finish) {
    callBackGameOver = finish;
}