const mainScreen = document.querySelector('body');
const startButton = document.querySelector('.start-button');
const demoButton = document.querySelector('.intro-button');
const screenFirst = document.querySelector('.intro');
const screenOptions = document.querySelector('.options');
const fullScreen = document.querySelector('.full-screen-img');

let callbackOnStart;
let callbackOnDemo;

export default {
    init: initGame
};

function initGame(onStart, onDemo) {
    callbackOnStart = onStart;
    callbackOnDemo = onDemo;

    startButton.addEventListener('click', moveToGame);
    demoButton.addEventListener('click', moveToDemo);
    fullScreen.addEventListener('click', goToFullScreen);
}

function moveToGame() {
    screenFirst.classList.add('hide');
    screenOptions.classList.remove('hide');
    callbackOnStart();
}

function moveToDemo() {
    screenFirst.classList.add('hide');
    screenOptions.classList.remove('hide');
    callbackOnDemo();
}

function goToFullScreen() {
    if (window.innerHeight !== screen.height) {
        fullScreen.src = './img/fullscrexit.png';
        mainScreen.requestFullscreen();
    } else {
        fullScreen.src = './img/fullscr.png';
        document.exitFullscreen();
    }
}