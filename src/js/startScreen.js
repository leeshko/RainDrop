const startButton = document.querySelector('.start-button');
const demoButton = document.querySelector('.intro-button');
const screenFirst = document.querySelector('.intro');
const screenSecond = document.querySelector('.game');
let callbackOnStart;

export default {
    init: initGame
};

function moveToGame() {
    screenFirst.classList.add('hide');
    screenSecond.classList.remove('hide');   
    callbackOnStart();
}

function initGame(onStart){
    callbackOnStart = onStart;
    startButton.addEventListener('click', moveToGame);
    demoButton.addEventListener('click', test);
}

function test() {               //simply for test
    console.log('test');
}