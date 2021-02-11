const submitButton = document.querySelector('.button-options');
const screenOptions  = document.querySelector('.options');
const screenSecond   = document.querySelector('.game');
let operatoraAndNumsArr = [];
let onCreateCallback;

export default {
    createOptions: createOptions
};

function createOptions(value) {
    onCreateCallback = value;
    changeOptions();
}

function changeOptions() {
    submitButton.addEventListener('click', function () {
    let operatorsArray = [];
    let numsArr = [];
    let checkboxes = document.querySelectorAll(':checked');
    let numbers = document.querySelectorAll('.number');

    for (let i = 0; i < checkboxes.length; i++) {
        operatorsArray.push(checkboxes[i].name);
    }
    operatoraAndNumsArr.push(operatorsArray);
    for (let i = 0; i < numbers.length; i++) {
        numsArr.push(numbers[i].value);
    }
    operatoraAndNumsArr.push(numsArr);
        onCreateCallback(operatoraAndNumsArr);
        screenOptions.classList.add('hide');
        screenSecond.classList.remove('hide');
    });
}   




