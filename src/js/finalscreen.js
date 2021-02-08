const gameScreen = document.querySelector('.game');
const finalScreen = document.querySelector('.high-score');
const scorePanel = document.querySelector('.scores');
const points = document.querySelector('.pts');

export default {
    createStat: createStat
};

function createStat() {
    const hiScore = scorePanel.innerHTML;
    gameScreen.classList.add('hide');
    finalScreen.classList.remove('hide');
    points.innerHTML = hiScore;
}