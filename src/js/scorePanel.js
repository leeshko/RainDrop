const scorePanel = document.querySelector('.scores');
const correctSound = document.querySelector('.correct');
const errorSound = document.querySelector('.error');

let bonusScore = 10;
let currentScore = 0;
let livesIndex = 2;
let callbackGameOver;


export default {
    increaseScore: increaseScore,
    decreaseScore: decreaseScore,
    wastedLife: wastedLife,
    init: init
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
    lives.children[livesIndex].style = 'visibility: hidden';
    if (livesIndex > 0) {
        livesIndex--;
        currentScore -= currentScore > 4 ? 5 : currentScore;
        scorePanel.innerHTML = currentScore;
    } else {
        callbackGameOver();
    }
}

function init(finish) {
    callbackGameOver = finish;
}