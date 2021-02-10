const mainScreen   = document.querySelector('body');
const startButton  = document.querySelector('.start-button');
const demoButton   = document.querySelector('.intro-button');
const screenFirst  = document.querySelector('.intro');
const screenSecond = document.querySelector('.game');
const fullScreen   = document.querySelector('.full-screen-img');

let callbackOnStart;
let callbackOnDemo;

export default {
    init: initGame,
    initDemo: initDemo,
    fullScreen: makeFullScreen
};

function moveToGame() {
    screenFirst.classList.add('hide');
    screenSecond.classList.remove('hide');
    callbackOnStart();
}

function moveToDemo() {
    screenFirst.classList.add('hide');
    screenSecond.classList.remove('hide');
    callbackOnDemo();
}

function initGame(onStart) {
    callbackOnStart = onStart;
    startButton.addEventListener('click', moveToGame);
}

function initDemo(onDemo) {
    callbackOnDemo = onDemo;
    demoButton.addEventListener('click', moveToDemo);
}

function makeFullScreen() {
    fullScreen.addEventListener('click', goToFullScreen);
}

function goToFullScreen() {
    if (window.innerHeight !== screen.height) {
        fullScreen.src = "./img/fullscrexit.png";
        mainScreen.requestFullscreen();
    } else {
        fullScreen.src = "./img/fullscr.png";
        document.exitFullscreen();
    }
}





