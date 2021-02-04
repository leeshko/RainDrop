const scorePanel = document.querySelector('.scores');
let bonusScore = 10;
let currentScore = 0;


export default {
    increaseScore: increaseScore,
    decreaseHealth: decreaseHealth,
    wastedLife: wastedLife
};

function increaseScore() {
    currentScore += bonusScore;
    scorePanel.innerHTML = currentScore;
    bonusScore++;
}

function decreaseHealth() {
    bonusScore = 10;
    // sound
    //gameover from index.js
}

function wastedLife() {
    
    console.log('wasted Life');
   


}
