const calculator = document.querySelector('.calculator');
const keys = document.querySelectorAll('.calc-button');
const display = calculator.querySelector('.display');
let firstNum = 0;
let operand = 0;
let secondNum = 0;


keys.forEach(key => key.addEventListener('click', e => {

    const key = e.target;
    const type = e.target.dataset.type;

    // CLEAR button
    if (type === 'clear') {
        firstNum = 0;
        operand = 0;
        secondNum = 0;
        display.innerHTML = 0;
    }

    // FIRST NUMBER variable
    if (type === 'number' && operand === 0) {
        if (display.innerHTML === '0') {
            display.innerHTML = key.textContent;
            firstNum = display.innerHTML;
            return firstNum;
        } else {
            display.innerHTML = display.innerHTML + key.textContent;
            firstNum = display.innerHTML;
            return firstNum;
        }
    }

    // First and non-calculating OPERATOR 
    if (type === 'operator' && secondNum === 0) {     
        display.innerHTML = key.textContent;
        return operand = key.textContent;
    }
    
    //SECOND NUMBER variable
    if (type === 'number' && operand !== 0) {
        if (display.innerHTML === operand){
            display.innerHTML = key.textContent;
            secondNum = display.innerHTML;          
            return secondNum;
        } else {
            display.innerHTML = display.innerHTML + key.textContent;
            secondNum = display.innerHTML;
            return secondNum;
        }
    }

    // EQUALS button
    if (type === 'equals') {
        display.innerHTML = calculate(firstNum, operand, secondNum);
    }

    // Second and calculating OPERATOR
    if (type === 'operator' && secondNum !== 0) {
            let answer = calculate(firstNum, operand, secondNum);
            display.innerHTML = key.textContent;
            operand = key.textContent;
            firstNum = answer;
    }
}))

function calculate (firstNum, operand, secondNum) {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
  
    if (operand === '+') return firstNum + secondNum;
    if (operand === '−') return firstNum - secondNum;
    if (operand === '×') return firstNum * secondNum;
    if (operand === '÷') return firstNum / secondNum;
  }