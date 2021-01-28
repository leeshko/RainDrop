import {calculatorPressOperator} from   './js/calculator';
import {calculatorPressNumber}   from   './js/calculator';
import {createDrop}              from   './js/drop';
import './css/style.css';

const demoButton = document.querySelector('.intro-button');
const startButton = document.querySelector('.start-button');
const screenFirst = document.querySelector('.intro');
const screenSecond = document.querySelector('.game');
let calculatorDisplay = document.querySelector('.display');         //
const numButtons = document.querySelectorAll('.numButton');         //
const operatorButtons = document.querySelectorAll('.operator');     //  May be no Need!!!!
let displayValue;                                                   //


function startGame() {
    screenFirst.classList.add('display-none');   
    screenSecond.classList.remove('display-none');
    calculatorPressNumber();
    calculatorPressOperator();
    createDrop();
}


demoButton.addEventListener('click', console.log('DEMO'));
startButton.addEventListener('click', startGame);


function test() {               //simply for test
    console.log('test');
}



