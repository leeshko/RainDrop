import calculator from   './js/calculator';
import drop       from   './js/drop';              
import './css/style.css';

const demoButton = document.querySelector('.intro-button');
const startButton = document.querySelector('.start-button');
const screenFirst = document.querySelector('.intro');
const screenSecond = document.querySelector('.game');



function startGame() {
    screenFirst.classList.add('hide');   
    screenSecond.classList.remove('hide');
    calculator.init(reactOnEnter);
    drop.drop(valueInDrop);
    setInterval(() => drop.drop(), 5000);
}

function reactOnEnter (result) {                
    console.log('enter pressed', result);
}

function valueInDrop (valueOfEquation) {
    console.log('valueOfEquation', valueOfEquation)
}

//возможно эти две функции объединить, дать одной функции два этих параметра, 
//и потом в этой же функции из сравнить??

demoButton.addEventListener('click', console.log('DEMO'));      
startButton.addEventListener('click', startGame);


function test() {               //simply for test
    console.log('test');
}



