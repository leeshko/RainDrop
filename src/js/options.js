const submitButton = document.querySelector('.button-options');
const screenOptions = document.querySelector('.options');
const screenSecond = document.querySelector('.game');

let onCreateCallback;

export default {
    createOptions: createOptions
};

function createOptions(value) {
    onCreateCallback = value;
    submitButton.addEventListener('click', storeOptions);
}

function storeOptions() {
    const operatorsArray = [];
    const numsArr = [];
    const checkboxes = document.querySelectorAll(':checked');
    const numbers = document.querySelectorAll('.number');
    
    for (let i = 0; i < checkboxes.length; i++) {
        operatorsArray.push(checkboxes[i].name);
    }
    
    for (let i = 0; i < numbers.length; i++) {
        numsArr.push(numbers[i].value);
    }
    
    if (operatorsArray.length > 0 && numsArr[0] !== '' && numsArr[1] !== '') {
        const operatorsAndNumsArr = [];
        operatorsAndNumsArr.push(operatorsArray);
        operatorsAndNumsArr.push(numsArr);
        onCreateCallback(operatorsAndNumsArr);

        screenOptions.classList.add('hide');
        screenSecond.classList.remove('hide');
    }
}